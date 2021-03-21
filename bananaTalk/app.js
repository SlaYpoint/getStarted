var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txt-input");


btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Clicked !");
    console.log("input", txtInput.value);
})