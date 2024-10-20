# import from packages
from fastapi import APIRouter, Request, Query, HTTPException

# import from files
from functions.jwt import jwt_func
from DB.db import users_collection
from models.R_body import EditUserRequest
from functions.check_admin import check_admin
from models.R_body import EditUserPointRequest
from functions.obj_convertor import ObjectID_convertor
from controllers.user.edit_user import edit_user_controller
from controllers.user.get_all_users import get_all_users_controller


# init
User_Router = APIRouter()


# get all users
@User_Router.get("/all-users")
def get_all_users(
    request: Request,
    limit: int = Query(10, ge=1),
    page: int = Query(1, ge=1),
    phone_number: str = Query(None, min_length=1),
):
    try:
        # wait for controller response
        response = get_all_users_controller(
            page=page,
            limit=limit,
            request=request,
            phone_number=phone_number,
        )

        return response  # --> success!

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


# get single user
@User_Router.get("/single-{phone_number}")
def get_single_user(request: Request, phone_number: str):
    try:
        # ! Check Admin
        check_admin(request)

        # find single user in DB
        single_user = users_collection.find_one({"phone_number": phone_number})

        # covert user's ID
        single_user["_id"] = str(single_user["_id"])

        return single_user

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


# edit user
@User_Router.post("/edit-{phone_number}")
def edit_single_user(
    phone_number: str,
    request: Request,
    body: EditUserRequest,
):
    try:
        # wait for controller response
        response = edit_user_controller(
            phone_number=phone_number, request=request, body=body
        )

        return response  # --> success

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


# edit user's points
@User_Router.post("/post-pints")
def deduct_increase_points(body: EditUserPointRequest):

    try:

        # set updated data
        updated_data = {"points": body.points}

        # find and update user in the database
        result = users_collection.update_one(
            {"phone_number": body.phone_number},
            {"$set": updated_data},
        )

        if result.matched_count == 0:
            raise HTTPException(
                status_code=404,
                detail={"msg": "Not found", "err": "User not found"},
            )

        if result.modified_count == 0:
            raise HTTPException(
                status_code=400,
                detail={"msg": "Bad request", "err": "No fields were updated"},
            )

        return {"msg": "User updated successfully"}

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


# delete user
@User_Router.delete("/delete-{id}")
def delete_single_user(request: Request, id: str):

    try:

        # convert string ID to ObjectID
        obj_id = ObjectID_convertor(id)

        # Find and delete the user
        result = users_collection.delete_one({"_id": obj_id})

        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="User not found")

        return {"msg": "User deleted successfully"}

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


# translate token for client
@User_Router.get("/translate-token")
def open_token(request: Request):
    try:
        # extract token from request headers
        token = request.headers.get("token")
        if not token:
            raise HTTPException(status_code=401, detail="Token missing")

        # translate
        translate_result = jwt_func(token)

        return translate_result

    # ! catch the HTTP errors
    except HTTPException as httpEx:
        raise httpEx

    # ! catch the SERVER errors
    except Exception as err:
        raise HTTPException(
            status_code=501,
            detail={
                "msg": "somthing goes wrong",
                "err": f"{err}",
            },
        )
