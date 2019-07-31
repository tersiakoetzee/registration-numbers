
describe("The set town registration", function () {

    it("should set the registration entered ", function () {
        let regFactory = RegNumbers();
        
        regFactory.setTownReg("cy 12345");
        regFactory.setTownReg("ca 45678");
        regFactory.setTownReg("ck 45678");
        regFactory.setTownReg("cl 85678");

        assert.deepEqual(["cy 12345","ca 45678","ck 45678","cl 85678"], regFactory.getAllRegNumbers())

    });

    it("should not be able to add CL as a reg number", function () {
        let regFactory = RegNumbers();
        
        regFactory.addTownReg("ca 12345");
        regFactory.addTownReg("ya 45678");
        regFactory.addTownReg("cl 45678");

        assert.deepEqual( ["ca 12345", "cy 45678" ], regFactory.getAllRegNumbers())
 

    });

    describe("Filter for all the towns registration", function () {

        it("should filter current registrations to see if registrations start with a town and return filtered list", function () {
            let regFactory = RegNumbers();
            
            regFactory.getAllRegNumbers("CY 12345");
            regFactory.getAllRegNumbers("CA 45678");
           
    
            assert.deepEqual(["CY 12345"],regFactory.filterForTownRegNumbers())
    
        })
        })
    }) 
