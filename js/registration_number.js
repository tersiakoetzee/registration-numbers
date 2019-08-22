  
function RegNumbers(initialRegNumbers) {

    let regMap = initialRegNumbers || [];
    var errorMessage = "";

    function setTownReg(isValidRegNumber) {


        var rex = /[A-Za-z]{2}\s[0-9]{3}\s[0-9]{3}$/;
        let test1 = rex.test(isValidRegNumber);

        var rex = /[A-Za-z]{2}\s[0-9]{3}$/;
        let test2 = rex.test(isValidRegNumber);

        var rex = /[A-Za-z]{2}\s[0-9]{4}$/;
        let test3 = rex.test(isValidRegNumber);

        var rex = /[A-Za-z]{2}\s[0-9]{5}$/;
        let test4 = rex.test(isValidRegNumber);

        if (!test1 && !test2 && !test3 && !test4) {
            errorMessage = "Please Enter A Valid Registration And Select A Town"
            return false;
        }


        if (isValidRegNumber) {
            const storeReg = isValidRegNumber.toUpperCase();

            if (!regMap.includes(storeReg)) {
                regMap.push(storeReg);
                return true;
            } else {
                errorMessage = "This Registration Had Already Been Entered";
                return false;
            }


        }
    }


    function getAllRegNumbers() {
        return regMap;

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
    function errorReg() {
        return errorMessage
    }



    return {
        setTownReg,
        getAllRegNumbers,
        filterForTownRegNumbers,
        errorReg

    }


}