# import from packages
from fastapi import FastAPI, staticfiles
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.background import BackgroundScheduler

# import from files
from routes.sms import sms_Router
from routes.auth import Auth_Router
from routes.user import User_Router
from routes.admin import Admin_Router

# init
app = FastAPI(
    # TODO: -> uncomment this 2 lines for deploy
    # docs_url=None,
    # redoc_url=None,
)

# access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# middlewares
app.include_router(sms_Router, prefix="/sms")
app.include_router(User_Router, prefix="/user")
app.include_router(Auth_Router, prefix="/auth")
app.include_router(Admin_Router, prefix="/admin")


# mount "/public" directory
app.mount("/public", staticfiles.StaticFiles(directory="public"), name="public")


# repeat the function
def functionO():
    print("I'm function! HA HA")


# add function to backgraund tastks
scheduler = BackgroundScheduler()
scheduler.add_job(functionO, "interval", hours=5)
scheduler.start()


@app.on_event("shutdown")
def shutdown_event():
    scheduler.shutdown()


# Home
@app.get("/", include_in_schema=False)
def read_root():
    return RedirectResponse(url="/public/index.html", status_code=302)
