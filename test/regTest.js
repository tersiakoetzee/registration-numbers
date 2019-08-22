
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

        assert.deepEqual(["CL 45678",], regFactory.getAllRegNumbers())


    });

    it("It should return all registrations from Cape Town", function (){

        let regFactory = RegNumbers();

        regFactory.setTownReg("CA 123 456");
        regFactory.setTownReg("ca 324 567");
        regFactory.setTownReg("CY 123 243");
        regFactory.setTownReg("CL 123 456");

        assert.deepEqual(['CA 123 456', 'CA 324 567'], regFactory.filterForTownRegNumbers('CA'));
    });

    it("It should be able to initialize with a list of registration numbers", function (){

        let regFactory = RegNumbers(["CA 123 456", "CL 123 456"]);

        assert.deepEqual(['CA 123 456','CL 123 456'], regFactory.getAllRegNumbers());
    });

    
     //It should return  an error message when no registration number added
    it("It should return  an error message when no registration number added", function (){

        let regFactory = RegNumbers();

        regFactory.setTownReg("");
        
       
        //git hub test
        assert.equal( "Please Enter A Valid Registration And Select A Town", regFactory.errorReg());
    });

    it("It should return  an error message when no registration number added", function (){

        let regFactory = RegNumbers();

        regFactory.setTownReg("ca 123");
        regFactory.setTownReg("ca 123");

        
       

        assert.equal( "This Registration Had Already Been Entered", regFactory.errorReg());
    });



    

  
}) 
