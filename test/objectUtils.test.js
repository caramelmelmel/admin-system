const { isEmptyEntry } = require("../helpers/objectUtils")

describe('Check for empty properties', ()=> {
    test('Empty string',()=> {
        expect(isEmptyEntry('')).toBeTruthy();
    })
    test('Valid non empty string',()=> {
        expect(isEmptyEntry("melmelmel")).not.toBeFalsy();
    })
    test('Null object',()=> {
        expect(isEmptyEntry(null)).toBeTruthy();
    })
})



