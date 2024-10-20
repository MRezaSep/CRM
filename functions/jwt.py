# import from packages
import jwt
from fastapi import HTTPException
from dotenv import dotenv_values


# init
algorithm = "HS256"
config = dotenv_values()
secret_key = config["secret_jwt_key"]


def jwt_func(data):

    # check type for create token
    if isinstance(data, dict):
        token = jwt.encode(data, secret_key, algorithm=algorithm)
        return token
    # check type for decode token
    elif isinstance(data, str):
        try:
            # Decode the JWT token into an object
            decoded_data = jwt.decode(data, secret_key, algorithms=[algorithm])
            return decoded_data

        except jwt.ExpiredSignatureError:
            raise HTTPException(status_code=40, detail="Token has expired")

        except jwt.DecodeError:
            raise HTTPException(status_code=406, detail="Invalid Token")
    # wrong data type
    else:
        return "Unsupported data type"
