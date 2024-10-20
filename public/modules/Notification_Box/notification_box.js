// =============================================================== >> Module <<
export function Notification(Text, Icon) {
  // ---------------------------------------------- >> Widget <<
  const Notification = document.createElement("div");
  Notification.classList.add("Notification");
  // ---------------------------------------------- >> Widget <<
  //
  // ------------------------------------------------ >> Icon <<
  const NotificationIcon = document.createElement("iconify-icon");
  NotificationIcon.classList.add("NotificationIcon");
  //
  // Fill The Icon >>
  NotificationIcon.setAttribute("icon", `${Icon}`);
  // Fill The Icon >>
  //
  // AppendChild >>
  Notification.appendChild(NotificationIcon);
  // AppendChild <<
  //
  // ------------------------------------------------ >> Icon <<
  //
  // ------------------------------------------------ >> Text <<
  const NotificationText = document.createElement("span");
  //
  // Fill The Span >>
  NotificationText.textContent = Text;
  // Fill The Span >>
  //
  // AppendChild >>
  Notification.appendChild(NotificationText);
  // AppendChild <<
  //
  // ------------------------------------------------ >> Text <<
  //
  // ---------------------------------------------- >> Return <<
  return Notification;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
