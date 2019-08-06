function RegNumbers() {

    let regMap = [];

    function setTownReg(reg) {
        var rex = /^[A-Za-z]{2}\s[0-9]{3}\s[0-9]{3}/;
        let test2 = rex.test(reg);

        console.log(test2);


        if (reg) {
            const storeReg = reg.toUpperCase();
            regMap[storeReg] == undefined ? regMap[storeReg] = 0 : 0;
            console.log(regMap)
        }


    }
    function getAllRegNumbers() {
        if (regMap === "" || regMap === undefined) {
            return "Please Enter a Valid Registration Number";
        } else {
            return Object.keys(regMap);
           
        }
       
    }
   


    function filterForTownRegNumbers(loc) {

        var registration = getAllRegNumbers();

        var filteredList = []
        for (var i = 0; i < registration.length; i++) {

            var currentRegNumber = registration[i];
            if (currentRegNumber.startsWith(loc)) {
                filteredList.push(currentRegNumber);
            }

        }


        return filteredList;


    }



    return {
        setTownReg,
        getAllRegNumbers,
        filterForTownRegNumbers

    }


}
