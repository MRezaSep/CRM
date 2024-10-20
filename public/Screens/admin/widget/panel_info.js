// =============================================================== >> Module <<
export function PanelWidget(DropDownListener, response) {
  // ---------------------------------------------- >> Widget <<
  const PanelContainer = document.createElement("div");
  PanelContainer.classList.add("PanelContainer");
  // ---------------------------------------------- >> Widget <<
  //
  // ------------------------------------------ >> Owner Name <<
  const OwnerName = document.createElement("span");
  OwnerName.classList.add("OwnerName");
  //
  // ----------- Text Content >>
  OwnerName.textContent = "نام : " + response.AccountName;
  // ----------- Text Content <<
  //
  // --------------------- AP >>
  PanelContainer.appendChild(OwnerName);
  // --------------------- AP <<
  //
  // ------------------------------------------ >> Owner Name <<
  //
  // ---------------------------------------- >> Panel Credit <<
  const PanelCredit = document.createElement("span");
  PanelCredit.classList.add("PanelCredit");
  //
  // ----------- Text Content >>
  PanelCredit.textContent =
    "اعتبار حساب : " +
    response.RemaindCredit.toLocaleString("en-US") +
    "  ريال";
  // ----------- Text Content <<
  //
  //
  // --------------------- AP >>
  PanelContainer.appendChild(PanelCredit);
  // --------------------- AP <<
  //
  // ---------------------------------------- >> Panel Credit <<
  //
  // ------------------------------------------- >> Drop Down <<
  const DropDown = document.createElement("div");
  DropDown.classList.add("DropDown");
  //
  PanelContainer.appendChild(DropDown);
  //
  // ------------------------------ > Listener <
  DropDown.addEventListener("mouseleave", () => {
    setTimeout(() => {
      DropDownOperator.widget.classList.remove("Active");
      OperatorIcon.classList.remove("Turn");
      DropDownOptions.classList.remove("Show");
    }, 3000);
  });
  // ------------------------------ > Listener <
  //
  // ------------------------------ > Operator <
  //
  const IconValue = "hugeicons:arrow-down-01";
  const TextValue = "گزینه ها";
  //
  const DropDownOperator = BTN(TextValue, IconValue, OperatorListner);
  const OperatorIcon = DropDownOperator.WidgetIcon;
  //
  function OperatorListner() {
    DropDownOperator.widget.classList.toggle("Active");
    OperatorIcon.classList.toggle("Turn");
    DropDownOptions.classList.toggle("Show");
  }
  //
  DropDown.appendChild(DropDownOperator.widget);
  //
  // ------------------------------ > Operator <
  //
  // ------------------------------- > Options <
  const DropDownOptions = document.createElement("div");
  DropDownOptions.classList.add("DropDownOptions");
  //
  DropDown.appendChild(DropDownOptions);
  //
  // --------------------- Listes >>
  const TextList = [
    "ایجاد پیامک",
    "افزایش اعتبار",
    "تبریک تولد",
    "سالگرد ازدواج",
  ];
  //
  const IconList = [
    "mdi:invoice-text-send",
    "game-icons:cash",
    "fa-solid:sms",
    "mingcute:anniversary-fill",
  ];
  // --------------------- Listes <<
  //
  // -------------------- Builder >>
  for (let index = 0; index < TextList.length; index++) {
    //
    // BTN CallBack >
    const Option = BTN(TextList[index], IconList[index], () => {
      DropDownListener(index);
    });
    Option.widget.id = "Option";
    // BTN CallBack <
    //
    // AP >
    DropDownOptions.appendChild(Option.widget);
    // AP <
    //
  }
  // -------------------- Builder >>
  //
  //
  // ------------------------------- > Options <
  //
  // ------------------------------------------- >> Drop Down <<
  //
  // ---------------------------------------------- >> Return <<
  return PanelContainer;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
//
// ================================================================== >> BTN <<
function BTN(Text, Icon, Listener) {
  //
  // -------------------------------------------------- > Container <
  const DropDownBtn = document.createElement("div");
  DropDownBtn.classList.add("DropDownBtn");
  // -------------------------------------------------- > Container <
  //
  // --------------------------------------------------- > Lsitener <
  DropDownBtn.addEventListener("click", () => {
    Listener();
  });
  // --------------------------------------------------- > Lsitener <
  //
  // ------------------------------------------------------- > Icon <
  const DropDownBtnIcon = document.createElement("iconify-icon");
  DropDownBtnIcon.classList.add("DropDownBtnIcon");
  DropDownBtnIcon.setAttribute("icon", Icon);
  // ------------------------------------------------------- > Icon <
  //
  // ------------------------------------------------------- > Text <
  const DropDownBtnText = document.createElement("span");
  DropDownBtnText.classList.add("DropDownBtnText");
  DropDownBtnText.textContent = Text;
  // ------------------------------------------------------- > Text <
  //
  // --------------------------------------------------------- > AP <
  DropDownBtn.appendChild(DropDownBtnIcon);
  DropDownBtn.appendChild(DropDownBtnText);
  // --------------------------------------------------------- > AP <
  //
  // ----------------------------------------------------- > Return <
  return {
    widget: DropDownBtn,
    WidgetIcon: DropDownBtnIcon,
  };
  // ----------------------------------------------------- > Return <
  //
}
// ================================================================== >> BTN <<
