var tempResetReg = document.querySelector(".resetTem")
var addRegBtnElem = document.querySelector(".clickedTem");
var filterBtnElem = document.querySelector(".filterTem");
var textElemHb = document.querySelector("#textTem");
var displayPlateHb = document.querySelector(".displayTem");
var entryHb = document.querySelector(".entryTem");
var radiobutHb = document.querySelector(".townRegTem");
var errorHb = document.querySelector(".errorTem");

var regTemFactory = RegNumbers( handleStorage());

var tempsource7 = document.querySelector(".userTemplate").innerHTML;
var userTemplate7 = Handlebars.compile(tempsource7);
// displayPlateHb.innerHTML = userTemplate7({ registrationList: [] });



function clearTemError() {
    setTimeout(function () {
        errorHb.innerHTML = "";
    }, 2000);
}

function regTemp() {

    if (regTemFactory.setTownReg(entryHb.value)) {
        entryHb.value = "";
        displayPlateHb.innerHTML = "";

        var hbStored = regTemFactory.getAllRegNumbers();
        localStorage.setItem("Hb", JSON.stringify(regTemFactory.getAllRegNumbers(hbStored)));
        displayPlateHb.innerHTML = userTemplate7({ registrationList: hbStored });
    } else {

        errorHb.innerHTML = regTemFactory.errorReg();
        clearTemError();
    }
}




function filterHandles() {
    var radiobutHb = document.querySelector("input[name='radiobut']:checked");
    displayPlateHb.innerHTML = "";


    var filteredHbResults = regTemFactory.filterForTownRegNumbers(radiobutHb.value);
    displayPlateHb.innerHTML = userTemplate7({ registrationList: filteredHbResults });
}

function handleStorage(){
    var handleLocalStorage = localStorage.getItem("Hb");;
    if (handleLocalStorage) {
        var registerHb = JSON.parse(handleLocalStorage)
        return registerHb;
    }
    return [];
}
const func = (reg) =>{
    let plateumber = {plate: reg}

}

window.addEventListener('load', function() {
    var handles = handleStorage();
    displayPlateHb.innerHTML = userTemplate7({ registrationList: handles });

})

function temReset() {
    location.reload();
    localStorage.clear();
    displayPlateHb.innerHTML = userTemplate7({ registrationList: [] });
}


addRegBtnElem.addEventListener("click", regTemp);
filterBtnElem.addEventListener("click", filterHandles);
tempResetReg.addEventListener("click", temReset);