// ======================================================== >> Definitions <<

// A => { Animation }

// AC => { Animation Container }

// ACO => { Animation Content }

// AN => { Animation Notification }

// AP => { Append Child }

// ======================================================== >> Definitions <<
//
// ============================================================= >> Module <<
export function AuthAnimation() {
  // ------------------------------------------------- >>> A <<<
  const Animation = document.createElement("div");
  Animation.classList.add("Animation");
  // ------------------------------------------------- >>> A <<<

  // -------------------------------------------------- >> AC <<
  const AnimationContainer = document.createElement("div");
  AnimationContainer.classList.add("AnimationContainer");

  // ------------------------------------------- > AP <
  Animation.appendChild(AnimationContainer);
  // ------------------------------------------- > AP <

  // -------------------------------------------------- >> AC <<

  // -------------------------------------------------- >> AN <<
  const AnimationNotification = document.createElement("div");
  AnimationNotification.classList.add("AnimationNotification");

  // ----------------------------------------- > Text <
  const AnimationNotificationText = document.createElement("span");
  AnimationNotification.textContent = "9633";
  // ----------------------------------------- > Text <

  // ------------------------------------------- > AP <
  AnimationNotification.appendChild(AnimationNotificationText);
  AnimationContainer.appendChild(AnimationNotification);
  // ------------------------------------------- > AP <

  // -------------------------------------------------- >> AN <<

  // ------------------------------------------------- >> ACO <<
  const AnimationContent = document.createElement("div");
  AnimationContent.classList.add("AnimationContent");

  // ------------------------------------------ > AP <
  AnimationContainer.appendChild(AnimationContent);
  // ------------------------------------------ > AP <

  // ---------------------------------- > Title Text <
  const AnimationTitleText = document.createElement("span");
  AnimationTitleText.classList.add("AnimationTitleText");
  AnimationTitleText.textContent = "ثبت نام در باشگاه مشتریان";

  // ----------------------------- AP >
  AnimationContent.appendChild(AnimationTitleText);
  // ----------------------------- AP <

  // ---------------------------------- > Title Text <

  // --------------------------------- > Phone Feild <
  const AnimationPhoneFeild = document.createElement("div");
  AnimationPhoneFeild.classList.add("AnimationPhoneFeild");

  // -------------------------- Hint >
  const AnimationPhoneFeildContainer = document.createElement("div");
  AnimationPhoneFeildContainer.classList.add("AnimationPhoneFeildContainer");

  // -------------------------- Hint >
  const AnimationPhoneFeildHint = document.createElement("span");
  AnimationPhoneFeildHint.classList.add("AnimationPhoneFeildHint");
  AnimationPhoneFeildHint.textContent = "شماره تلفن خود را وارد کنید";
  // -------------------------- Hint <

  // ---------------------- Recangle >
  const AnimationPhoneFeildRecangle = document.createElement("div");
  AnimationPhoneFeildRecangle.classList.add("AnimationPhoneFeildRecangle");
  // ---------------------- Recangle <

  // ---------------------------- AP >
  AnimationPhoneFeildContainer.appendChild(AnimationPhoneFeildHint);
  AnimationPhoneFeildContainer.appendChild(AnimationPhoneFeildRecangle);
  AnimationPhoneFeild.appendChild(AnimationPhoneFeildContainer);
  AnimationContent.appendChild(AnimationPhoneFeild);
  // ---------------------------- AP <

  // --------------------------------- > Phone Feild <

  // ---------------------------------- > OTP Feilds <
  const AnimationOTPContainer = document.createElement("div");
  AnimationOTPContainer.classList.add("AnimationOTPContainer");

  // ------------------ Feild builder >
  const FeildsNumber = ["9", "6", "3", "3"];
  for (let index = 0; index < FeildsNumber.length; index++) {
    const AnimationOTPFeild = document.createElement("div");
    AnimationOTPFeild.classList.add("AnimationOTPFeild");

    const AnimationOTPFeildText = document.createElement("span");
    AnimationOTPFeildText.classList.add("AnimationOTPFeildText");
    AnimationOTPFeildText.textContent = FeildsNumber[index];

    AnimationOTPFeild.appendChild(AnimationOTPFeildText);
    AnimationOTPContainer.appendChild(AnimationOTPFeild);
  }
  AnimationContent.appendChild(AnimationOTPContainer);

  // ------------------ Feild builder <

  // ---------------------------------- > OTP Feilds <

  // ---------------------------------- > Submit Btn <
  const AnimationBtn = document.createElement("div");
  AnimationBtn.classList.add("AnimationBtn");

  // ---------------------- container >
  const AnimatedBtnContainer = document.createElement("div");
  AnimatedBtnContainer.classList.add("AnimatedBtnContainer");
  // ---------------------- container <

  // ------------------------ pointer >
  const AnimatedBtnPointer = document.createElement("div");
  AnimatedBtnPointer.classList.add("AnimatedBtnPointer");
  // ------------------------ pointer <

  // --------------------------- Text >
  const AnimationBtnText = document.createElement("span");
  AnimationBtnText.textContent = "بعدی";
  // --------------------------- Text <

  // --------------------------- Icon >
  const AnimationBtnIcon = document.createElement("iconify-icon");
  AnimationBtnIcon.setAttribute("icon", "akar-icons:check-box-fill");
  // --------------------------- Icon <

  // ------------------------------ AP >
  AnimatedBtnContainer.appendChild(AnimationBtnIcon);
  AnimatedBtnContainer.appendChild(AnimationBtnText);
  AnimatedBtnContainer.appendChild(AnimatedBtnPointer);
  AnimationBtn.appendChild(AnimatedBtnContainer);
  AnimationContent.appendChild(AnimationBtn);
  // ------------------------------ AP <

  // ---------------------------------- > Submit Btn <

  // ------------------------------------- > Success <
  const AnimationSuccess = document.createElement("div");
  AnimationSuccess.classList.add("AnimationSuccess");

  // ---------------------- Success Icon >
  const AnimationSuccessIcon = document.createElement("iconify-icon");
  AnimationSuccessIcon.setAttribute("icon", "ri:check-double-fill");
  // ---------------------- Success Icon <

  // ---------------------- Success Text >
  const AnimationSuccessText = document.createElement("span");
  AnimationSuccessText.classList.add("AnimationSuccessText");
  AnimationSuccessText.textContent = "احراز هویت با موفقیت انجام شد";
  // ---------------------- Success Text <

  // -------------------------------- AP >
  AnimationSuccess.appendChild(AnimationSuccessIcon);
  AnimationSuccess.appendChild(AnimationSuccessText);
  AnimationContent.appendChild(AnimationSuccess);
  // -------------------------------- AP <

  // ------------------------------------- > Success <

  // ------------------------------------------------- >> ACO <<

  // -------------------------------------------- >> Interval <<

  // -------------------------------------------- >> Interval <<
  function interval() {
    const AnimationOTPFeild = document.querySelectorAll(".AnimationOTPFeild");

    // ------------------------------ > Content <
    AnimationContent.classList.add("show");
    setTimeout(() => {
      AnimationContent.classList.remove("show");
    }, 9000);

    setTimeout(() => {
      // title text >
      AnimationTitleText.textContent = "ثبت نام در باشگاه مشتریان";
      // title text <
      //
      // phone field >
      AnimationPhoneFeild.classList.remove("remove");
      AnimationPhoneFeildHint.classList.remove("remove");
      AnimationPhoneFeildRecangle.classList.remove("show");
      // phone field <
      //
      // otp feild >
      AnimationOTPContainer.classList.remove("show");
      AnimationOTPFeild.forEach((feild) => {
        feild.classList.remove("check");
        feild.classList.remove("show");
      });
      // otp feild <
      //
      // btn >
      AnimationBtn.classList.remove("check");
      // btn <
      //
      // success >
      AnimationSuccess.classList.remove("show");
      // success <
    }, 9500);
    // ------------------------------ > Content <

    // ---------------------------- > Tilte Text <
    setTimeout(() => {
      AnimationTitleText.classList.add("change");
    }, 3000);

    setTimeout(() => {
      AnimationTitleText.textContent = "کد را وارد کنید";
    }, 3400);

    setTimeout(() => {
      AnimationTitleText.classList.remove("change");
    }, 3500);
    // ---------------------------- > Tilte Text <

    // --------------------------- > Phone Feild <
    setTimeout(() => {
      AnimationPhoneFeildHint.classList.remove("remove");
      AnimationPhoneFeildRecangle.classList.add("show");
    }, 1000);

    setTimeout(() => {
      AnimationBtn.classList.add("click");
      AnimatedBtnPointer.classList.add("click");
    }, 2000);

    setTimeout(() => {
      AnimationBtn.classList.remove("click");
      AnimatedBtnPointer.classList.remove("click");
    }, 2500);

    setTimeout(() => {
      AnimationPhoneFeild.classList.add("remove");
    }, 3000);
    // --------------------------- > Phone Feild <

    // ----------------------------- > OTP Feild <
    setTimeout(() => {
      AnimationOTPContainer.classList.add("show");
    }, 3500);

    setTimeout(() => {
      AnimationOTPFeild.forEach((feild) => {
        feild.classList.add("show");
      });
    }, 4500);

    setTimeout(() => {
      AnimationBtn.classList.add("click");
      AnimatedBtnPointer.classList.add("click");
    }, 5000);

    setTimeout(() => {
      AnimationBtn.classList.remove("click");
      AnimatedBtnPointer.classList.remove("click");
    }, 5500);

    setTimeout(() => {
      AnimationOTPFeild.forEach((feild) => {
        feild.classList.add("check");
      });
      AnimationBtn.classList.add("check");
    }, 6000);

    // ----------------------------- > OTP Feild <

    // -------------------------- > Notification <
    setTimeout(() => {
      AnimationNotification.classList.add("popup");
    }, 4000);

    setTimeout(() => {
      AnimationNotification.classList.remove("popup");
    }, 5000);
    // -------------------------- > Notification <

    // ------------------------------- > Success <
    setTimeout(() => {
      AnimationSuccess.classList.add("show");
    }, 6500);
    // ------------------------------- > Success <
  }

  setTimeout(() => {
    interval();
  }, 500);
  const AnimationInterval = setInterval(interval, 10000);

  // -------------------------------------------- >> Interval <<

  // ---------------------------------------------- >> Return <<
  return Animation;
  // ---------------------------------------------- >> Return <<
}
// ============================================================= >> Module <<
