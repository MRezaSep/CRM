# import from packages
import requests
from pytz import timezone
from datetime import datetime
from pymongo import DESCENDING
from dotenv import load_dotenv
from persiantools.jdatetime import JalaliDate
from fastapi import APIRouter, HTTPException, Request, Query

# import from files
from functions.check_admin import check_admin
from functions.obj_convertor import ObjectID_convertor
from models.R_body import SendSMSToRequest, EditAutoSMSBody
from models.SMS import SMShistoryModel, auto_body, AutoSMSModel
from DB.db import sms_collection, users_collection, auto_sms_collection


# init
config = load_dotenv()
sms_Router = APIRouter()


# get "AMOOT" panel's info
@sms_Router.get("/amoot-info")
async def get_panel_info():

    try:

        # panel token
        token = config["Amoot_token"]

        # URL for the API
        url = config["Amoot_panle_url_status"]

        # Headers for the request
        headers = {"Authorization": token}

        # Data to send with the request (in this case, it's empty)
        data = {}

        # Make the POST request
        response = requests.post(url, headers=headers, data=data)

        # change format to json
        result = response.json()

        return result

    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "msg": "somthing goes wrong",
                "err": f"{err}",
            },
        )


# get all SMS history
@sms_Router.get("/SMS-history")
def get_SMS_history_list(
    request: Request,
    limit: int = Query(10, ge=1),
    page: int = Query(1, ge=1),
):
    try:

        # ! Check Admin
        check_admin(request)

        # set skip DB data
        skip = (page - 1) * limit

        # get all SMS from DB
        all_sms_historys = (
            sms_collection.find().sort("_id", DESCENDING).skip(skip).limit(limit)
        )

        # get the total count of users
        total_sms_count = sms_collection.count_documents({})

        # change ObjectID format to string
        all_sms_list = []
        for sms in all_sms_historys:

            # convert ID
            sms["_id"] = str(sms["_id"])

            # the given Gregorian date
            gregorian_date = sms["sendDay"]

            # split the date string to get year, month, and day
            year, month, day = map(int, gregorian_date.split("-"))

            # convert to persian date
            jalali_date = JalaliDate.to_jalali(year, month, day)

            # format the persian date in the desired format
            persian_date_str = (
                f"{jalali_date.year:04}/{jalali_date.month:02}/{jalali_date.day:02}"
            )

            # change sms date data
            sms["sendDay"] = persian_date_str

            all_sms_list.append(sms)

        return {"all_SMS": all_sms_list, "list_length": total_sms_count}  # --> succes

    except HTTPException as httpEx:
        raise httpEx

    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "msg": "somthing goes wrong",
                "err": f"{err}",
            },
        )


# record SMS history
def record_sms_history(request: SMShistoryModel):

    dict_sms_history = request.model_dump()
    new_sms = sms_collection.insert_one(dict_sms_history)

    if new_sms.acknowledged:
        return "succes"

    return "what happend?"


# send SMS
@sms_Router.post("/send-to")
def send_SMS_to(request: Request, body: SendSMSToRequest):

    # index filter guide:
    # 0 -> send to selected numbers in list
    # 1 -> send to all
    # 2 -> send to mens
    # 3 -> send to womens
    # 4 -> send to singles
    # 5 -> send to married people
    # ! if index > 5 or index < 0 --> err 402

    try:

        # ! Check Admin
        check_admin(request)

        # ! err 402
        if body.filter_index > 5 or body.filter_index < 0:
            raise HTTPException(
                status_code=402,
                detail={
                    "msg": "wrong index number!",
                },
            )

        # ! err 403
        if body.phone_numbers != [] and body.filter_index > 0:
            raise HTTPException(
                status_code=403,
                detail={
                    "msg": "bad filters!",
                },
            )

        # extract phone numbers for DB
        phones_for_history = body.phone_numbers

        # send simple SMS
        token = config["Amoot_token"]
        url = config["Amoot_panle_url_send"]

        # Get current time in Iran timezone
        now_iran = datetime.now(timezone("Asia/Tehran"))

        # format the datetime in ISO 8601 format
        send_date_time = now_iran.isoformat()

        # message text and line number
        sms_message_text = body.txt
        line_number = "Public"

        # mobile numbers
        mobiles = ",".join(body.phone_numbers)

        # set mobiles number list from filter index
        if body.phone_numbers == [] and body.filter_index > 0:

            # set query filters
            query_filters = {}

            # check filter index status
            if body.filter_index == 1:
                query_filters = {}
            elif body.filter_index == 2:
                query_filters["is_male"] = True
            elif body.filter_index == 3:
                query_filters["is_male"] = False
            elif body.filter_index == 4:
                query_filters["is_marriage"] = False
            elif body.filter_index == 5:
                query_filters["is_marriage"] = True
            else:

                # ! bad filters Err
                raise HTTPException(
                    status_code=433,
                    detail={
                        "msg": "bad filters!",
                    },
                )

            # get users from DB
            users_from_db = users_collection.find(query_filters)

            mobiles = []

            # add filter phone numbers to list
            for user in users_from_db:
                mobiles.append(user["phone_number"])

            # update phones for history
            phones_for_history = mobiles

        # construct the full URL with query parameters
        full_url = f"{url}?Token={requests.utils.quote(token)}&SendDateTime={requests.utils.quote(send_date_time)}&SMSMessageText={requests.utils.quote(sms_message_text)}&LineNumber={line_number}&Mobiles={mobiles}"

        # make the GET request
        response = requests.get(full_url)

        # change format to json
        result = response.json()

        # save in history and then send status code 200 to client
        if result["Status"] == "Success":

            dict_sms_history = SMShistoryModel(
                text=body.txt,
                sentNumber=phones_for_history,
                msg_amoot_id="No-ID",
            ).model_dump()

            new_sms = sms_collection.insert_one(dict_sms_history)

            if new_sms.acknowledged:
                return "SMS sent successfully and saved in DB history"

            return "SMS sent successfully"

        # ! Amoot Err
        raise HTTPException(
            status_code=502,
            detail={"msg": "can't send to users", "err": "AMOOT error :("},
        )

    # ! catch HTTP errors
    except HTTPException as httpEx:
        raise httpEx

    # ! catch SERVER errors
    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "msg": "somthing goes wrong",
                "err": f"{err}",
            },
        )


# get auto SMS list
@sms_Router.get("/auto-text-{model}")
def get_auto_sms_list(model: str):

    try:

        auto_sms_DB = auto_sms_collection.find_one({"sms_type": model})
        auto_sms_DB["_id"] = str(auto_sms_DB["_id"])
        return auto_sms_DB

    # ! catch SERVER errors
    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "msg": "somthing goes wrong",
                "err": f"{err}",
            },
        )


# edit auto sms
@sms_Router.post("/edit-auto-text")
def edit_auto_sms(body: EditAutoSMSBody):

    try:

        # set updated data
        updated_data = {"text": body.text}

        # convert ID
        obj_id = ObjectID_convertor(body.str_id)

        # find and update user in the database
        result = auto_sms_collection.update_one(
            {"_id": obj_id},
            {"$set": updated_data},
        )

        if result.matched_count == 0:
            raise HTTPException(
                status_code=404,
                detail={"msg": "Not found", "err": "SMS not found"},
            )

        if result.modified_count == 0:
            raise HTTPException(
                status_code=400,
                detail={"msg": "Bad request", "err": "No fields were updated"},
            )

        return {"msg": "SMS updated successfully"}

    except HTTPException as http_err_response:
        raise http_err_response

    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "msg": "somthing goes wrong",
                "err": f"{err}",
            },
        )


# ! DEV Route:
@sms_Router.post("/DEV/-->* ;)-auto-SMS!")
def add_auto_sms(body: auto_body):

    auto_sms = AutoSMSModel(
        text=body.text,
        sms_type=body.msg_amoot_id,
    ).model_dump()

    new_auto_sms = auto_sms_collection.insert_one(auto_sms)

    if new_auto_sms.acknowledged:
        return "success!"

    raise HTTPException(status_code=401, detail="not work!")
