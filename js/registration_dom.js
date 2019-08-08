var clickResetReg = document.querySelector(".reset")
var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".filter");
var textElem = document.querySelector("#text");
var displayPlate = document.querySelector(".displayPlate");
var entry = document.querySelector(".entry");
var radiobut = document.querySelector(".townReg");
var error = document.querySelector(".error");


var regFactory = RegNumbers(getValuesFromLocalStorage());

function clearError() {
    setTimeout(function () {
        error.innerHTML = "";
    }, 2000);
}

function createPlate(regchild) {
    var li = document.createElement("li");
    li.className = 'regPlate';
    li.textContent = regchild;

    displayPlate.append(li);
}

function buildRegPlate(plateArray) {
    plateArray.forEach(currentReg => {
        createPlate(currentReg)
    });
}


function regEntry() {

    if (regFactory.setTownReg(entry.value)) {
        entry.value = "";
        displayPlate.innerHTML = "";

        var regStored = regFactory.getAllRegNumbers();
        localStorage.setItem("Reg", JSON.stringify(regFactory.getAllRegNumbers()));

        buildRegPlate(regStored);

    } else {

        error.innerHTML = regFactory.errorReg();
        clearError();
    }
}

function townSelector() {

    var radiobut = document.querySelector("input[name='radiobut']:checked");
    displayPlate.innerHTML = "";


    var filteredResults = regFactory.filterForTownRegNumbers(radiobut.value);
    buildRegPlate(filteredResults);

}

function getValuesFromLocalStorage() {
    var valueInLocalStorage = localStorage.getItem("Reg");;
    if (valueInLocalStorage) {
        var register = JSON.parse(valueInLocalStorage)
        return register;
    }
    return [];
}


window.onload = function () {
    var keys = getValuesFromLocalStorage();
    buildRegPlate(keys)
}

function reset() {
    localStorage.clear();
    displayPlate.innerHTML = "";
}


clickResetReg.addEventListener("click", reset);
addBtnElem.addEventListener("click", regEntry);
showBtnElem.addEventListener("click", townSelector);