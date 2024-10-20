# import from packages
import time
from fastapi import HTTPException


# import from files
from functions.jwt import jwt_func
from DB.db import users_collection
from controllers.auth.send_OTP import otp_codes
from models.R_body import VerifyOTPRequest


def verify_otp_controller(request: VerifyOTPRequest):

    # extract data from request
    code = request.code
    phone_number = request.phone_number

    # check admin
    is_this_admin = False

    admin_in_DB = users_collection.find_one({"phone_number": phone_number})
    if admin_in_DB and admin_in_DB["user_type"] == "admin":
        is_this_admin = True

    # check for existed phone number
    if phone_number not in otp_codes:
        raise HTTPException(status_code=400, detail="OTP not found or expired")

    # select the code
    otp_data = otp_codes[phone_number]

    # check for expiration
    if otp_data["exp"] < time.time():
        raise HTTPException(status_code=401, detail="OTP expired!")

    # match codes
    if otp_data["code"] != code:
        raise HTTPException(status_code=402, detail="OTP is wrong!! :(")

    # set token, status and page URL
    status = 200
    token = "No-Token"
    panel_url = "No-Url"

    # create token for admin and change URL
    if is_this_admin:
        admin_in_dict = {
            "id": str(admin_in_DB["_id"]),
            "name": admin_in_DB["name"],
            "phone_number": admin_in_DB["phone_number"],
        }
        token = jwt_func(admin_in_dict)

        panel_url = "./Screens/admin/index.html"

        # change status code for admin
        status = 201

    # success!
    return {
        "status": status,
        "url": panel_url,
        "token": token,
        "message": "OTP verified successfully",
    }
