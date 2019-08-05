var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".filter");
var textElem = document.querySelector("#text");
var displayPlate = document.querySelector(".displayPlate");
var entry  = document.querySelector(".entry");
var radiobut = document.querySelector(".townReg")
var regFactory = RegNumbers();



function regEntry() {
    regFactory.setTownReg(entry.value)
    

    entry.value = "";
    var regInput = document.createElement("div");
    var newPlate = document.createTextNode(regFactory.getAllRegNumbers());

    regInput.appendChild(newPlate);
    regInput.setAttribute("class", "displayPlate");
    displayPlate.appendChild(regInput);
}

function townSelector(){
   
    var radiobut = document.querySelector("input[name = radiobut]:checked");

    
    displayPlate.innerHTML = regFactory.filterForTownRegNumbers(radiobut.value);
   
    }
   
 





addBtnElem.addEventListener("click", regEntry);
showBtnElem.addEventListener("click",  townSelector);