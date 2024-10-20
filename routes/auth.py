# import from packages
from fastapi.responses import JSONResponse
from fastapi import APIRouter, HTTPException, BackgroundTasks


# import from files
from controllers.auth.send_OTP import send_otp_controller
from controllers.auth.verify_OTP import verify_otp_controller
from controllers.auth.signup_club import signup_club_controller
from models.R_body import OTPRequest, VerifyOTPRequest, SignupClubRequest

# init
Auth_Router = APIRouter()


# send OTP --> POST
@Auth_Router.post("/send-otp")
async def send_otp(request: OTPRequest, background_tasks: BackgroundTasks):
    try:

        # wait for controller response
        response = await send_otp_controller(
            request=request, background_tasks=background_tasks
        )
        return response

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


# verify OTP and auto signin for admin --> POST
@Auth_Router.post("/verify-otp")
def verify_otp(request: VerifyOTPRequest):

    try:

        # wait for controller response
        response = verify_otp_controller(request)
        return JSONResponse(status_code=response["status"], content=response)

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


# signup user in club
@Auth_Router.post("/signup-club")
async def signup_club(request: SignupClubRequest):

    try:

        # wait for controller response
        response = signup_club_controller(request)
        return response

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
