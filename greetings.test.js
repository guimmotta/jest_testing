const greetings = require('./greetings')

describe('Salutation Tests', () => {
    test('sayHello with "World" returns "Hello, World"', () => {
        const helloWorld = greetings.sayHello('World')
    
        expect(helloWorld).toBe('Hello, World')
    })
    
    test('sayHello with "Alice" returns "Hello, Alice"', () => {
        const helloAlice = greetings.sayHello('Alice')
    
        expect(helloAlice).toBe('Hello, Alice')
    })
    
    test('sayHello with "Bob" returns "Hello, Bob"', () => {
        const helloBob = greetings.sayHello('Bob')
    
        expect(helloBob).toBe('Hello, Bob')
    })
})