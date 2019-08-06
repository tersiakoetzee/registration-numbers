
describe("The registration factory", function () {

    it("should set the registration entered ", function () {
        var regFactory = RegNumbers();

        regFactory.setTownReg("CY 12345");
        regFactory.setTownReg("CA 45678");
        regFactory.setTownReg("CK 45678");
        regFactory.setTownReg("CL 85678");

        assert.deepEqual(["CY 12345", "CA 45678", "CK 45678", "CL 85678"], regFactory.getAllRegNumbers())
    });

    it("should not be able to duplicate a registration number", function () {
        let regFactory = RegNumbers();

        regFactory.setTownReg("cl 45678");
        regFactory.setTownReg("cl 45678");
        regFactory.setTownReg("cl 45678");

        assert.deepEqual(["CL 45678"], regFactory.getAllRegNumbers())


    });

    it("It should return all registrations from Cape Town", function (){

        let regFactory = RegNumbers();

        regFactory.setTownReg("CA 123 456");
        regFactory.setTownReg("ca 324 567");
        regFactory.setTownReg("CY 123 243");
        regFactory.setTownReg("CL 123 456");

        assert.deepEqual(['CA 123 456', 'CA 324 567'], regFactory.filterForTownRegNumbers('CA'));
    })

    it("It should return me an error message when no reg number added", function (){

        let regFactory = RegNumbers();

        regFactory.setTownReg();
        regFactory.setTownReg("");
        
       

        assert.equal( regFactory.setTownReg("Please Enter a Valid Registration Number"));
    })
    

  
}) 
