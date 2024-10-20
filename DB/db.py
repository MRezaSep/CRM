# import from packages
from pymongo import MongoClient
from dotenv import dotenv_values


# init
config = dotenv_values(".env")

# online DB url
MONGODB_URL = config["DB_url"]

try:
    # connect to mongoDB
    client = MongoClient(MONGODB_URL, ssl=True)

    # select data base
    db = client["Neshat_final"]
    sms_collection = db["sms"]
    users_collection = db["users"]
    auto_sms_collection = db["auto-sms"]

    # success
    print("we connected to DB :)")

except Exception as err:
    print(f"connection err: {err}")  # --> error
