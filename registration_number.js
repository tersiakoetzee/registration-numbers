function RegNumbers() {
    var regList = [];


    function setTownReg(reg) {

        regList.push(reg);
    }
    function getAllRegNumbers() {
        return regList;
    }
//filter the registration by town 
    function filterForTownRegNumbers(loc) {
        var filteredList = []
        for (var i = 0; i < regList.length; i++) {
            var currentRegNumber = regList[i];

            if (currentRegNumber.startsWith(loc)) {
                filteredList.push(currentRegNumber);
            }
        }
        return filteredList;
    }

    
    function townFilter() {
       
        // for (var i = 0; i < regList.length; i++) {
        //     if (regNum[i].startsWith(town)) {
        //         regList[filteredList[i]] = 0;
        //     }
        // }
        return filteredList
    }

    return {
        setTownReg,
        getAllRegNumbers,
        filterForTownRegNumbers,
        townFilter
    }


}
