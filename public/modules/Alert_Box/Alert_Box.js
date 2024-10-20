// =============================================================== >> Module <<
export function AlertBox(
  AlertTI,
  haveTT,
  AlertTT,
  haveFeild,
  AlertT,
  SubmitListener,
  CloseListener
) {
  // ---------------------------------------------- >> Widget <<
  const AlertContainer = document.createElement("div");
  AlertContainer.classList.add("AlertContainer");
  // ---------------------------------------------- >> Widget <<
  //

  // ----------------------------------------- >> Title Alert <<
  const AlertTitle = document.createElement("div");
  AlertTitle.classList.add("AlertTitle");
  //
  // -------------------------- > Alert Icon <
  const AlertTitleIcon = document.createElement("iconify-icon");
  AlertTitleIcon.classList.add("AlertTitleIcon");
  //
  // ------------ Icon Value >>
  AlertTitleIcon.setAttribute("icon", `${AlertTI}`);
  // ------------ Icon Value <<
  //
  // ------------- Icon Text >>
  const AlertTitleText = document.createElement("span");
  AlertTitleText.textContent = AlertTT;
  // ------------- Icon Text <<
  //
  // -------------------- AP >>
  AlertContainer.appendChild(AlertTitle);
  //
  if (haveTT) {
    AlertTitle.appendChild(AlertTitleText);
    AlertTitle.appendChild(AlertTitleIcon);
  } else {
    AlertTitle.appendChild(AlertTitleIcon);
  }
  // -------------------- AP <<
  //
  // -------------------------- > Alert Icon <
  //
  // ----------------------------------------- >> Title Alert <<
  //
  // ---------------------------------------- >> Massage Text <<
  const AlertText = document.createElement("span");
  AlertText.classList.add("AlertText");
  //
  // ------------------------- > Text Value <
  AlertText.textContent = AlertT;
  // ------------------------- > Text Value <
  //
  // --------------------------------- > AP <
  if (haveFeild == false) {
    AlertContainer.appendChild(AlertText);
  }
  // --------------------------------- > AP <
  //
  // ---------------------------------------- >> Massage Text <<
  //
  // ---------------------------------------- >> Massage input <<
  const AlertInput = document.createElement("input");
  AlertInput.classList.add("AlertInput");
  AlertInput.setAttribute("type", "text");
  AlertInput.placeholder = "امتیاز را وارد کنید";
  if (haveFeild == true) {
    AlertContainer.appendChild(AlertInput);
  }
  // ---------------------------------------- >> Massage input <<
  //
  // ---------------------------------------- >> Btn Function <<
  function Btn(Id, Text, Listener) {
    //
    // Btn Container >>
    const AlertBtn = document.createElement("div");
    AlertBtn.classList.add("AlertBtn");
    AlertBtn.id = Id;
    // Btn Container <<
    //
    // EL >>
    AlertBtn.addEventListener("click", () => {
      Listener();
    });
    // EL <<
    //
    // Btn Text >>
    const AlertBtnText = document.createElement("span");
    AlertBtnText.textContent = Text;
    // Btn Text <<
    //
    // AP >>
    AlertBtn.appendChild(AlertBtnText);
    // AP <<
    //
    // Return >>
    return AlertBtn;
    // Return <<
  }
  // ---------------------------------------- >> Btn Function <<
  //
  // --------------------------------------- >> Btn Container <<
  const AlertBtnContainer = document.createElement("div");
  AlertBtnContainer.classList.add("AlertBtnContainer");
  //
  // -------------------------------- > AP <
  AlertContainer.appendChild(AlertBtnContainer);
  // -------------------------------- > AP <
  //
  // ------------------------- > Close Btn <
  //
  // ------------ varibales >>
  const CloseBtnId = "Close";
  const CloseBtnText = "خیر";
  // ------------ varibales >>
  //
  // ------------- CallBack >>
  const CloseBtn = Btn(CloseBtnId, CloseBtnText, () => {
    CloseListener();
  });
  // ------------- CallBack <<
  //
  // ------------------- AP >>
  AlertBtnContainer.appendChild(CloseBtn);
  // ------------------- AP <<
  //
  // ------------------------- > Close Btn <
  //
  // ------------------------ > Submit Btn <
  //
  // ------------ varibales >>
  const SubmitBtnId = "Submit";
  const SubmitBtnText = "بله";
  // ------------ varibales >>
  //
  // ------------- CallBack >>
  const SubmitBtn = Btn(SubmitBtnId, SubmitBtnText, () => {
    SubmitListener();
  });
  // ------------- CallBack <<
  //
  // ------------------- AP >>
  AlertBtnContainer.appendChild(SubmitBtn);
  // ------------------- AP <<
  //
  // ------------------------ > Submit Btn <
  //
  // --------------------------------------- >> Btn Container <<
  //
  // ---------------------------------------------- >> Return <<
  return AlertContainer;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
