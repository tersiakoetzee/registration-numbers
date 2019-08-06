var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".filter");
var textElem = document.querySelector("#text");
var displayPlate = document.querySelector(".displayPlate");
var entry = document.querySelector(".entry");
var radiobut = document.querySelector(".townReg");
var error = document.querySelector(".error");
var error2 = document.querySelector(".error2");
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
    if(entry.value == "" || entry.value == undefined){
        return error.innerHTML = "Please Enter A Registration Number";
        
    }
    entry.value = "";
    displayPlate.innerHTML = "";
    var regStored = regFactory.getAllRegNumbers();
    buildRegPlate(regStored);
}

function townSelector() {
    var radiobut = document.querySelector("input[name='radiobut']:checked");
    if (radiobut == "" || radiobut == undefined){
        return error2.innerHTML = "Please Select a Town";
    }
    displayPlate.innerHTML = "";
    var filteredResults = regFactory.filterForTownRegNumbers(radiobut.value);
    buildRegPlate(filteredResults);
    
}







addBtnElem.addEventListener("click", regEntry);
showBtnElem.addEventListener("click", townSelector);