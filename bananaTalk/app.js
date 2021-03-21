var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Clicked !");
    output.innerText = txtInput.value;
})



