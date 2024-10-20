# import from packages
from fastapi import Request, Query

# import from files
from DB.db import users_collection
from functions.check_admin import check_admin


# get all users controller
def get_all_users_controller(
    request: Request,
    limit: int = Query(10, ge=1),
    page: int = Query(1, ge=1),
    phone_number: str = Query(None, min_length=1),
):
    # ! Check Admin
    check_admin(request)

    # set skip DB data
    skip = (page - 1) * limit

    # get the total count of users
    total_users_count = users_collection.count_documents({"user_type": "user"})

    # create the filter for the phone_number search
    filter_query = {}
    if phone_number:
        filter_query["phone_number"] = {"$regex": f"^{phone_number}"}
        total_users_count = users_collection.count_documents(filter_query)

    # get users with limit and skip
    users = []
    for user in users_collection.find(filter_query).skip(skip).limit(limit):

        if user["user_type"] == "user":
            user["_id"] = str(user["_id"])
            users.append(user)

    # send users list
    return {"users": users, "list_length": total_users_count}
