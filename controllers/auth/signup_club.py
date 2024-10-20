# import from packages
from fastapi import HTTPException

# import from files
from models.user import User
from DB.db import users_collection
from models.R_body import VerifyOTPRequest


# signup in club
def signup_club_controller(request: VerifyOTPRequest):
    # extract data from request
    job = request.job
    name = request.name
    is_male = request.is_male
    address = request.address
    mrg_date = request.mrg_date
    birth_date = request.birth_date
    is_marriage = request.is_marriage
    phone_number = request.phone_number
    national_code = request.national_code

    # check for existed user
    db_phone_number = users_collection.find_one({"phone_number": phone_number})
    if db_phone_number:
        raise HTTPException(
            status_code=401,
            detail={"msg": "bad request", "err": "user is alredy exist in DB"},
        )

    # change type to dict
    dict_user = User(
        job=job,
        name=name,
        address=address,
        is_male=is_male,
        mrg_date=mrg_date,
        birth_date=birth_date,
        is_marriage=is_marriage,
        phone_number=phone_number,
        national_code=national_code,
    ).model_dump()

    # add new user to DB
    new_user = users_collection.insert_one(dict_user)

    # sucess
    if new_user.acknowledged:
        return "new user created successfully"

    # can't save
    raise HTTPException(
        status_code=403,
        detail={"msg": "DB err!", "err": "can't save new user in DB"},
    )
