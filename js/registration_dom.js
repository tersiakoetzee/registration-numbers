var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".filter");
var textElem = document.querySelector("#text");
var displayPlate = document.querySelector(".displayPlate");
var entry = document.querySelector(".entry");
var radiobut = document.querySelector(".townReg")
var regFactory = RegNumbers();

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
    regFactory.setTownReg(entry.value);
    entry.value = "";
    displayPlate.innerHTML = "";
    var regStored = regFactory.getAllRegNumbers();
    buildRegPlate(regStored);
}

function townSelector() {
    var radiobut = document.querySelector("input[name='radiobut']:checked");
    console.log(radiobut);
    displayPlate.innerHTML = '';
    var filteredResults = regFactory.filterForTownRegNumbers(radiobut.value);
    buildRegPlate(filteredResults)
}







addBtnElem.addEventListener("click", regEntry);
showBtnElem.addEventListener("click", townSelector);