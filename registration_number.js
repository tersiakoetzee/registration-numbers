function RegNumbers() {

    let regMap = [];
    let storeReg;

    // let getting;
    function setTownReg(reg) {
        if (reg) {
            storeReg = reg;
        }
        regMap[storeReg] == undefined ? regMap[storeReg] = 0 : 0;

    }


    function getAllRegNumbers() {
        console.log(regMap);
        return Object.keys(regMap);
    }

    function filterForTownRegNumbers(registration, loc) {
        if (registration.length < 1) {
            registration = getAllRegNumbers();
        }
        var filteredList = []
        for (var i = 0; i < registration.length; i++) {
            var currentRegNumber = registration[i];
            if (currentRegNumber.startsWith(loc)) {
                filteredList.push(currentRegNumber);
            }
            console.log(filteredList);
        } return filteredList;


    }



    return {
        setTownReg,
        getAllRegNumbers,
        filterForTownRegNumbers


    }


}
