// =============================================================== >> Module <<
export function HistoryBox(response) {
  // ---------------------------------------------- >> Widget <<
  const HistoryBox = document.createElement("div");
  HistoryBox.classList.add("HistoryBox");
  // ---------------------------------------------- >> Widget <<
  //
  // ------------------------------------------------ >> Type <<
  const HistoryMassageType = document.createElement("span");
  HistoryMassageType.classList.add("HistoryMassageType");
  //
  // --------------------------------- > Icon Value <
  if (response.msg_amoot_id == "B") {
    HistoryMassageType.textContent = "تبریک تولد";
    HistoryBox.classList.add("Birth");
  } else if (response.msg_amoot_id == "M") {
    HistoryMassageType.textContent = "سالگرد ازدواج";
    HistoryBox.classList.add("Marridge");
  } else {
    HistoryMassageType.textContent = "متن پیام";
  }
  // --------------------------------- > Icon Value <
  //
  // ----------------------------------------- > AP <
  HistoryBox.appendChild(HistoryMassageType);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> Type <<
  //
  // ------------------------------------------------ >> Text <<
  const HistoryText = document.createElement("span");
  HistoryText.classList.add("HistoryText");
  HistoryText.textContent = response.text;
  // ------------------------------------------------ >> Text <<
  //
  // ------------------------------------------------ >> Flex <<
  const HistoryFlexContainer = document.createElement("div");
  HistoryFlexContainer.classList.add("HistoryFlexContainer");
  //
  // -------------------------------------- > Count <
  const HistoryNumbersCount = document.createElement("span");
  HistoryNumbersCount.classList.add("HistoryNumbersCount");
  HistoryNumbersCount.textContent = `تعداد کاربران ارسال شده :  ${response.sentNumber.length}`;
  // -------------------------------------- > Count <
  //
  // --------------------------------------- > Date <
  const HistoryModifiedDate = document.createElement("span");
  HistoryModifiedDate.classList.add("HistoryModifiedDate");
  HistoryModifiedDate.textContent = response.sendDay + ` :  تاریخ ارسال`;
  // --------------------------------------- > Date <
  //
  // ------------------------------------------------ >> Flex <<
  //
  // -------------------------------------------------- >> AP <<
  HistoryBox.appendChild(HistoryText);
  //
  HistoryBox.appendChild(HistoryFlexContainer);
  //
  HistoryFlexContainer.appendChild(HistoryNumbersCount);
  //
  HistoryFlexContainer.appendChild(HistoryModifiedDate);
  //
  // -------------------------------------------------- >> AP <<
  //
  // ---------------------------------------------- >> Return <<
  return HistoryBox;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
