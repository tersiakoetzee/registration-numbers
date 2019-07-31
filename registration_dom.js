var addBtnElem = document.querySelector(".clicked");
var showBtnElem = document.querySelector(".clicked");
var textElem = document.querySelector("#text");
var displayplate = document.querySelector("#display");
var regFactory = RegNumbers();



function regEntry() {
    if (textElem.value != undefined && textElem.value.trim() != "") {
        var ul = document.getElementById("display");
        regEntry.setTownReg(regInput.value);

        let regnums = regEntry.getAllRegNumbers();
        document.getElementById(display).innerHTML = ""

        for (let i = 0; i < regnums.length; i++) {
            
            regPlate(regnums[i]);
        }

        // var regInput = document.getElementById("regInput");
        // var li = document.createElement("li");
        // li.setAttribute("id",regInput.value);
        // li.appendChild(document.createTextNode(regInput.value));
        // ul.appendChild(li);
    }
}

function regPlate(regnums) {
    var li = document.createElement("li");
    li.textContent = regnums;
    displayplate.appendChild(li);
}

function showTown() {
    document.getElementById("display").innerHTML = ""
    var radiobuttElem = document.querySelectorAll("#town");


    for (var i = 0; i < radiobuttElem.length; i++)


        // regFactory.addTownReg(elem.value);onclick in html
        let filteredList = regFactory.townFilter()
    for (var i = 0; i < filteredList.length; i++) {
        regPlate(filteredList[i]);
    }
}



// addBtnElem.addEventListener("click", regEntry)
// showBtnElem.addEventListener("click", )