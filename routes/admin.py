# import from packages
from fastapi import APIRouter, Request, HTTPException


# import from files
from functions.jwt import jwt_func
from DB.db import users_collection
from functions.check_admin import check_admin


# init
Admin_Router = APIRouter()


# get personal info
@Admin_Router.get("/info")
def get_info(request: Request):

    try:
        # ! check admin
        result = check_admin(request)

        # find user in DB
        admin = users_collection.find_one({"phone_number": result["phone_number"]})

        # convert ID
        admin["_id"] = str(admin["_id"])

        # success
        return admin

    # ! catch HTTP errors
    except HTTPException as httpEx:
        raise httpEx

    # ! catch server errors
    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "err": f"{err}",
                "msg": "server err!",
            },
        )


# get admin token
@Admin_Router.get("/get-token")
def get_admin_token():

    try:
        # select admin
        admin_user = users_collection.find_one({"phone_number": "09055806306"})

        # set admin in dict
        admin_in_dict = {
            "id": str(admin_user["_id"]),
            "name": admin_user["name"],
            "phone_number": admin_user["phone_number"],
        }

        # create token
        token = jwt_func(admin_in_dict)

        return token

    # ! catch server errors
    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "err": f"{err}",
                "msg": "server err!",
            },
        )


# check admin
@Admin_Router.get("/check-admin")
def check_admin_token(request: Request):

    try:
        check_admin(request)
        return True

    # ! catch HTTP errors
    except HTTPException as httpEx:
        raise httpEx

    # ! catch server errors
    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "err": f"{err}",
                "msg": "server err!",
            },
        )
