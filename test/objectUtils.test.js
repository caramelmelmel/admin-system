const { isEmptyEntry, isValidEmail } = require("../helpers/objectUtils")

describe('Check for empty properties', ()=> {
    test('Empty string',()=> {
        expect(isEmptyEntry('')).toBeTruthy();
    })
    test('Valid non empty string',()=> {
        expect(isEmptyEntry("melmelmel")).toBeFalsy();
    })
    test('Array object empty',()=> {
        expect(isEmptyEntry([])).toBeTruthy();
    })
    test('Null object',()=> {
        expect(isEmptyEntry(null)).toBeTruthy();
    })
})

describe('Validate email Format', ()=> {
    test('Empty email',()=> {
        expect(isValidEmail('')).toBeFalsy();
    })
    test('invalid input',()=> {
        expect(isValidEmail("melmelmel")).toBeFalsy();
    })
    test('valid email',()=> {
        expect(isValidEmail("melmelmel@mail.com")).toBeTruthy();
    })
})



