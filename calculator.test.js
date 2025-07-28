const calc = require('./calculator')

describe('Calculator Tests', () => {
    test('sum 2 and 2 returns 4', () => {
        const mySum = calc.sum(2,2)
    
        expect(mySum).toBe(4)
    })
    
    test('multily 3 and 3 returns 9', () => {
        const myMultiply = calc.multiply(3, 3)
    
        expect(myMultiply).toBeGreaterThan(3)
    })
    
    test('subtract 5 from 10 returns 5', () => {
        const mySubtract = calc.subtract(10, 5)
    
        expect(mySubtract).toBe(5)
    })

    test ('divide 10 by 2 returns 5', () => {
        const myDivide = calc.divide(10, 2)

        expect(myDivide).toBe(5)
    })
})