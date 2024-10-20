// =============================================================== >> Module <<
export function CheckBox(Label, checkBoxList, ID, CheckBoxListener) {
  // ---------------------------------------------- >> Widget <<
  const CheckBox = document.createElement("div");
  CheckBox.classList.add("CheckBox");
  // ---------------------------------------------- >> Widget <<
  //
  // ----------------------------------------------- >> Label <<
  const CheckBoxLabel = document.createElement("span");
  CheckBoxLabel.classList.add("CheckBoxLabel");
  //
  // ------------------------------- > TextContent <
  CheckBoxLabel.textContent = Label;
  // ------------------------------- > TextContent <
  //
  // ------------------------------- > appendChild <
  CheckBox.appendChild(CheckBoxLabel);
  // ------------------------------- > appendChild <
  //
  // ----------------------------------------------- >> Label <<
  //
  // --------------------------------------------- >> Options <<
  const CheckBoxOptionContainer = document.createElement("div");
  CheckBoxOptionContainer.classList.add("CheckBoxOptionContainer");
  //
  // ----------------------------- > appendChild <
  CheckBox.appendChild(CheckBoxOptionContainer);
  // ----------------------------- > appendChild <
  //
  // --------------------------------- > Builder <
  for (let index = 0; index < checkBoxList.length; index++) {
    // --------------------- Option >>
    const CheckBoxOption = document.createElement("div");
    CheckBoxOption.classList.add("CheckBoxOption");
    CheckBoxOption.id = ID;
    // --------------------- Option <<
    //
    // ----------------- OptionText >>
    const CheckBoxOptionText = document.createElement("span");
    CheckBoxOptionText.textContent = `${checkBoxList[index]}`;
    // ----------------- OptionText <<
    //
    // ------------------- Listener >>
    CheckBoxOption.addEventListener("click", () => {
      CheckBoxListener(index);
    });
    // ------------------- Listener <<
    //
    // ---------------- appendChild >>
    CheckBoxOption.appendChild(CheckBoxOptionText);
    CheckBoxOptionContainer.appendChild(CheckBoxOption);
    // ---------------- appendChild >>
    //
  }
  // --------------------------------- > Builder <
  //
  // --------------------------------------------- >> Options <<
  //
  // ---------------------------------------------- >> Return <<
  return CheckBox;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
