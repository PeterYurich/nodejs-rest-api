const isLeapYear = require("./isLeapYear")


describe("test isLeapYear function", () => {
    test("2008 - true", () => {
        const result = isLeapYear(2008)
        expect(result).toBe(true)
    })

    test("2003 - false", () => {
        expect(isLeapYear(2003)).toBe(false)
    })

    it("1900 - false", () => {
        expect(isLeapYear(2003)).toBe(false)
    })

    it("2000 - false", () => {
        expect(isLeapYear(2003)).toBe(false)
    })


    test("41 - error 'year must be 42 or more'", () => {
        expect(() => isLeapYear(41)).toThrow('year must be 42 or more')
    })

    test("2008.4 - error 'year must be integer", () => {
        expect(() => isLeapYear(2008.4)).toThrow('year must be integer')
    })

    test("error 'year must exist", () => {
        expect(() => isLeapYear()).toThrow('year must exist')
    })

    test("error 'year must be number", () => {
        expect(() => isLeapYear("2006")).toThrow('year must be number')
    })
})