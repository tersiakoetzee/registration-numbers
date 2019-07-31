var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".clicked");
var textElem = document.querySelector("#text");
var displayplate = document.querySelector("#display");
var regFactory = RegNumbers();



function regEntry() {
    // if (textElem.value != undefined && textElem.value.trim() != "") {
    //     var ul = document.getElementById("display");
    //     regEntry.setTownReg(regInput.value);

    //     let regnums = regEntry.getAllRegNumbers();
    //     document.getElementById(display).innerHTML = ""

    //     for (let i = 0; i < regnums.length; i++) {

    //         regPlate(regnums[i]);
    //     }

    var regInput = document.getElementById("regInput");
    var li = document.createElement("li");
    li.setAttribute("id", regInput.value);
    regFactory.setTownReg(regInput.value);
    li.appendChild(document.createTextNode(regFactory.getAllRegNumbers()));
    ul.appendChild(li);
}




// addBtnElem.addEventListener("click", regEntry)
// showBtnElem.addEventListener("click", )