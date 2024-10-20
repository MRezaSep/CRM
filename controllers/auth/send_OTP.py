# import from packages
import time
import random
from fastapi import HTTPException, BackgroundTasks


# import from files
from functions import sender
from DB.db import users_collection
from models.R_body import OTPRequest


# OTP codes
otp_codes = {}


# expired OTP codes cleaner
def OTP_cleaner():
    target_time = time.time() - 15 * 60
    key_to_remove = []

    # find expired codes
    for key, value in otp_codes.items():
        if value["exp"] < target_time:
            key_to_remove.append(key)

    # delete expired codes
    for key in key_to_remove:
        del otp_codes[key]


# send OTP code controller function
async def send_otp_controller(request: OTPRequest, background_tasks: BackgroundTasks):

    # validate phone number
    if len(request.phone_number) != 11:

        raise HTTPException(
            status_code=400, detail="Phone number must be 11 characters long"
        )

    # check for existed user
    db_phone_number = users_collection.find_one({"phone_number": request.phone_number})
    if db_phone_number and db_phone_number["user_type"] == "user":
        raise HTTPException(
            status_code=401,
            detail={"msg": "bad request", "err": "user is alredy exist in DB"},
        )

    # create OTP code
    otp_code = str(random.randint(1000, 9999))

    # set expiration time --> 5 min
    expiration_time = time.time() + 5 * 60

    # add to OTP codes
    otp_codes[f"{request.phone_number}"] = {
        "code": otp_code,
        "exp": expiration_time,
    }

    # clean expired codes in background
    background_tasks.add_task(OTP_cleaner)

    # selected template
    template = "NeshatOTP"

    # change template for admin OTP
    if db_phone_number and db_phone_number["user_type"] == "admin":
        template = "NeshatOTPAdmin"

    # send code to user
    sms_result = await sender.send_code(
        code=otp_code,
        phone_number=request.phone_number,
        template=template,
    )

    # check result
    if sms_result == 200:
        return "code sent successfully :)"

    elif sms_result == 409:
        raise HTTPException(status_code=409, detail="SMS sender can't send the code!")
    else:
        raise HTTPException(status_code=433, detail="somthig is going on! :(")
