function hideElementByid(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementByid(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
