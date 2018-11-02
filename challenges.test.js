var challenges = require('./challenges.js');

describe('greaterNum', () => {

    test('returns the larger of 2 numbers', () => {
        expect(challenges.greaterNum(3, 12)).toBe(12)
        expect(challenges.greaterNum(9, 2)).toBe(9)
        expect(challenges.greaterNum(7, -3)).toBe(7)
    })

    // Stretch:
    // test('throws error if given invalid argument', => {
    //     expect(challenges.greaterNum(2, 'm')).toBe('TypeError: Arguments must be integers')
    // })
    
})

describe('helloWorld', () => {
    test('returns Hello, world! when it receives "en" as an argument', () => {
        expect(challenges.helloWorld('en')).toBe('Hello, World!')
    })
    test('returns Hola, mundo! when it receives "es" as an argument', () => {
        expect(challenges.helloWorld('es')).toBe('Hola, Mundo!')
    })
    test('returns Hallo, Welt! when it receives "de" as an argument', () => {
        expect(challenges.helloWorld('de')).toBe('Hallo, Welt!')
    })
    test('returns Hello, World! when it receives any other argument', () => {
        expect(challenges.helloWorld('fr')).toBe('Hello World')
    })

    // Stretch:
    // test('throws error if given invalid argument', => {
    //     expect(challenges.helloWorld(2, 'm')).toBe('ArgumentError: Not a valid language code')
    // })
    
    // test('returns "Sorry, I can't translate that." for valid language code it doesn't handle', => {
    //     expect(challenges.helloWorld('fr')).toBe('ArgumentError: Not a valid language code')
    // })
})
    
describe('assignGrade', () => {
    test('returns A for scores between 90 and 100', () => {
        expect(challenges.assignGrade(90)).toBe('A')
        expect(challenges.assignGrade(100)).toBe('A')
    })
    test('returns B for scores between 80 and 89', () => {
        expect(challenges.assignGrade(80)).toBe('B')
        expect(challenges.assignGrade(89)).toBe('B')
    })
    test('returns C for scores between 70 and 79', () => {
        expect(challenges.assignGrade(70)).toBe('C')
        expect(challenges.assignGrade(79)).toBe('C')
    })
    test('returns D for scores between 60 and 69', () => {
        expect(challenges.assignGrade(60)).toBe('D')
        expect(challenges.assignGrade(69)).toBe('D')
    })
    test('returns F for grades lower than 60', () => {
        expect(challenges.assignGrade(59)).toBe('F')
        expect(challenges.assignGrade(0)).toBe('F')
    })

    // Stretch:
    // test('throws error if given invalid argument', => {
    //     expect(challenges.assignGrade(2, 'm')).toBe('ArgumentError: Not a valid score')
    // })
})

describe('pluralizer', () => {
    test('returns a number and pluralized noun if given an number greatercd.. than 1', () => {
        expect(challenges.pluralizer(5, 'cat')).toBe('5 cats')
    })
    test('returns a singular noun when number is 1', () => {
        expect(challenges.pluralizer(1, 'dog')).toBe('1 dog')
    })
    test('can handle some collective nouns', () => {
        expect(challenges.pluralizer(3, 'sheep')).toBe('3 sheep')
        expect(challenges.pluralizer(4, 'geese')).toBe('4 geese')
        expect(challenges.pluralizer(2, 'children')).toBe('2 children')
        expect(challenges.pluralizer(12, 'people')).toBe('12 people')
        expect(challenges.pluralizer(11, 'species')).toBe('12 species')
    })

    // Stretch:
    // test('throws error if given invalid argument', => {
    //     expect(challenges.pluralizer(2, 3)).toBe('ArgumentError: Expected a noun.')
    //     expect(challenges.pluralizer('unicorn', 3)).toBe('ArgumentError: Expected a count.')
    // })
})
