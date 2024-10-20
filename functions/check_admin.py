# import from packages
from bson import ObjectId
from fastapi import Request, HTTPException


# import from files
from DB.db import users_collection
from functions.jwt import jwt_func


def check_admin(request: Request):

    # ! Check Admin------------------------------
    # extract token from request headers
    token = request.headers.get("token")
    if not token:
        raise HTTPException(status_code=401, detail="Token missing")

    # unlock token
    unlock_token = jwt_func(token)

    # find user in BD and check it's type
    user_in_DB = users_collection.find_one({"_id": ObjectId(unlock_token["id"])})
    if user_in_DB["user_type"] != "admin":
        raise HTTPException(status_code=402, detail="user is not admin")
    # ! ------------------------------Check Admin

    return unlock_token  # --> success
