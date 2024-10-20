// ================================================================= >> Minute Cookie <<
export function setMinuteCookie(name, value, expirationMinutes) {
  // >> expiration
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + expirationMinutes * 60 * 1000
  );
  // >> expiration

  // >> set cookie <<
  const cookieValue =
    value + "; expires=" + expirationDate.toUTCString() + "; path=/";

  document.cookie = name + "=" + cookieValue;
  // >> set cookie <<
}
// ================================================================= >> Minute Cookie <<
//
// ================================================================== >> Month Cookie <<
export function setMonthCookie(name, value, expirationMonths) {
  // ----------------------------------------------- >> expiration <<
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + expirationMonths);
  // ----------------------------------------------- >> expiration <<

  // ----------------------------------------------- >> set cookie <<
  const cookieValue =
    value + "; expires=" + expirationDate.toUTCString() + "; path=/";
  document.cookie = name + "=" + cookieValue;
  // ----------------------------------------------- >> set cookie <<
}
// ================================================================== >> Month Cookie <<
//
// ================================================================= >> Simple Cookie <<
export function setSimpleCookie(name, value) {
  document.cookie = `${name}=${value};path=/`;
}
// ================================================================= >> Simple Cookie <<
//
// ==================================================================== >> Get Cookie <<
export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  // > in case cookie not find <
  return null;
  // > in case cookie not find <
}
// ==================================================================== >> Get Cookie <<
//
// ================================================================= >> Remove Cookie <<
export function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// ================================================================= >> Remove Cookie <<
