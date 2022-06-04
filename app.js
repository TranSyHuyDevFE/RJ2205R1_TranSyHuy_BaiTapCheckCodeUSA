//Buoc 1: DOM đến các thẻ (value)
var zipCodeUS = document.querySelector("#zipCode");

var form = document.querySelector("form");

//Bước 2: Viết hàm Validation cho các value

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = message;
}
//Check-Regex

function checkZipCodeError(input) {
  const regexCode = /^[0-9]{5}(?:-[0-9]{4})?$/;
  input.value = input.value.trim();
  if (regexCode.test(input.value)) {
    showSuccess(input, "Hello American!");
  }
  if (!input.value) {
    showError(input, "No Empty Here!");
  } else {
    showError(input, "Code Invalid");
  }
}

//goi den nut Button CallBack()
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkZipCodeError(zipCodeUS);
});
