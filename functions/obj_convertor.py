# import from packages
from bson import ObjectId
from fastapi import HTTPException


# translate the ID
def ObjectID_convertor(id: str):
    try:
        convert_ID = ObjectId(id)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid ID")

    return convert_ID
