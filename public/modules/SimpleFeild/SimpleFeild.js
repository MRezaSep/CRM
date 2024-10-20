// =============================================================== >> Module <<
export function SimpleFeild(LabelText, Placeholder) {
  // ---------------------------------------------- >> Widget <<
  const FeildContainer = document.createElement("div");
  FeildContainer.classList.add("FeildContainer");
  // ---------------------------------------------- >> Widget <<
  //
  // ----------------------------------------------- >> Label <<
  const FeildLabel = document.createElement("label");
  FeildLabel.classList.add("FeildLabel");

  // ------------------------------- > TextContent <
  FeildLabel.setAttribute("for", `${LabelText}`);
  FeildLabel.textContent = LabelText;
  // ------------------------------- > TextContent <
  //
  // ------------------------------- > appendChild <
  FeildContainer.appendChild(FeildLabel);
  // ------------------------------- > appendChild <
  //
  // ----------------------------------------------- >> Label <<
  //
  // ----------------------------------------------- >> Feild <<
  const FeildInput = document.createElement("input");
  FeildInput.classList.add("FeildInput");

  // ------------------------------ > setAttribute <
  FeildInput.setAttribute("type", "text");
  FeildInput.setAttribute("id", `${LabelText}`);
  FeildInput.setAttribute("name", `${LabelText}`);
  FeildInput.setAttribute("placeholder", `${Placeholder}`);
  // ------------------------------ > setAttribute <
  //
  // ------------------------------- > appendChild <
  FeildContainer.appendChild(FeildInput);
  // ------------------------------- > appendChild <
  //
  // ----------------------------------------------- >> Feild <<
  //
  // ---------------------------------------------- >> Return <<
  return {
    widget: FeildContainer,
    Feild: FeildInput,
  };
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
