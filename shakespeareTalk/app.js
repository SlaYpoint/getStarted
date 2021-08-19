var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector(".content");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("error has occured", err);
  alert("some issue with the server: try after sometime.");
}

btnTranslate.addEventListener("click", function clickEventHandler() {
  console.log("Clicked !");

  fetch(getTranslationURL(txtInput.value))
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerHTML = json.contents.translated;
    })
    .catch(errorHandler);
});
