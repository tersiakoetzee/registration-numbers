function RegNumbers() {

    let regMap = [];
    let storeReg;

    // let getting;
    function setTownReg(reg) {
        var rex = /^[A-Za-z]{2}\s[0-9]{3}\s[0-9]{3}/;
        //let newtest = new RegExp(rex);
        let test2 = rex.test(reg);
        
        console.log(test2);
          
        if (reg) {
            storeReg = reg;
        }
        regMap[storeReg] == undefined ? regMap[storeReg] = 0 : 0;
       
        
    }

    function getAllRegNumbers() {
      
        return Object.keys(regMap);
    }
    
  
    function filterForTownRegNumbers(loc) {
        
            registration = getAllRegNumbers();
         
        var filteredList = []
        for (var i = 0; i < registration.length; i++) {
            var currentRegNumber = registration[i];
            if (currentRegNumber.startsWith(loc)) {
                filteredList.push(currentRegNumber);
            }
           
        } return filteredList;


    }



    return {
        setTownReg,
        getAllRegNumbers,
        filterForTownRegNumbers

    }


}
