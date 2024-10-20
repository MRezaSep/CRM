# import from packages
from fastapi import Request, HTTPException

# import from files
from DB.db import users_collection
from models.R_body import EditUserRequest
from functions.check_admin import check_admin


# edit user controller
def edit_user_controller(
    phone_number: str,
    request: Request,
    body: EditUserRequest,
):

    # ! Check Admin
    check_admin(request)

    # convert request to dictionary and remove None values
    updated_data = {k: v for k, v in body.model_dump().items() if v is not None}

    if not updated_data:
        raise HTTPException(
            status_code=400,
            detail={"msg": "bad request", "err": "no fields provided for update"},
        )

    # find and update user in the database
    result = users_collection.update_one(
        {"phone_number": phone_number}, {"$set": updated_data}
    )

    if result.matched_count == 0:
        raise HTTPException(
            status_code=404,
            detail={"msg": "not found", "err": "user not found"},
        )

    if result.modified_count == 0:
        raise HTTPException(
            status_code=400,
            detail={"msg": "bad request", "err": "no fields were updated"},
        )

    return {"msg": "user updated successfully"}
