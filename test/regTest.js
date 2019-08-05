
describe("The set town registration", function () {

    it("should set the registration entered ", function () {
        let regFactory = RegNumbers();

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

        assert.deepEqual(["cl 45678"], regFactory.getAllRegNumbers())


    });

    it("It should return all registrations from Cape Town", () => {

        let regFactory = RegNumbers();

        regFactory.setTownReg("CA 123 456");
        regFactory.setTownReg("CA 324 567");
        regFactory.setTownReg("CY 123 243");
        regFactory.setTownReg("CL 123 456");

        let getReg = regFactory.getAllRegNumbers();
        assert.deepEqual(['CA 123 456', 'CA 324 567'], regFactory.filterForTownRegNumbers(getReg, 'CA'));
    })

  
}) 
