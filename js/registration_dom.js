var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".filter");
var textElem = document.querySelector("#text");
var displayPlate = document.querySelector(".displayPlate");
var entry = document.querySelector(".entry");
var radiobut = document.querySelector(".townReg");
var error = document.querySelector(".error");

var regFactory = RegNumbers();



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
    var rex = /^[A-Za-z]{2}\s[0-9]{3}\s[0-9]{3}/;
        let test2 = rex.test(entry.value);

        if(!test2){
            error.innerHTML = "Please Enter A Valid Registration And Select A Town"
            clearError();
            return;
        }

    regFactory.setTownReg(entry.value);


    entry.value = "";
    displayPlate.innerHTML = "";
    var regStored = regFactory.getAllRegNumbers();
    buildRegPlate(regStored);

}

function townSelector() {

    var radiobut = document.querySelector("input[name='radiobut']:checked");
    displayPlate.innerHTML = "";


    var filteredResults = regFactory.filterForTownRegNumbers(radiobut.value);

    buildRegPlate(filteredResults);

}







addBtnElem.addEventListener("click", regEntry);
showBtnElem.addEventListener("click", townSelector);