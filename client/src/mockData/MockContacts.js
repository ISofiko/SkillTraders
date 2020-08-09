const mockMessages = require('./MockMessages')

class MockContact {
    constructor(name: string, messages:[string]) {
        this.name = name;
        this.messages = messages;
    }
}

const c1 = new MockContact("Alice Alisson", mockMessages)
const c2 = new MockContact("Sofia Ilina", mockMessages)
const c3 = new MockContact("Moe Ali", mockMessages)
const c4 = new MockContact("David Chen", mockMessages)
const c5 = new MockContact("Anonymous", mockMessages)
const c6 = new MockContact("Anonymous", mockMessages)
const c7 = new MockContact("Anonymous", mockMessages)
const c8 = new MockContact("Anonymous", mockMessages)
const c9 = new MockContact("Anonymous", mockMessages)
const c10 = new MockContact("Anonymous", mockMessages)
const c11 = new MockContact("Anonymous", mockMessages)
const c12 = new MockContact("Anonymous", mockMessages)
const c13 = new MockContact("Anonymous", mockMessages)
const c14 = new MockContact("Anonymous", mockMessages)

const contacts = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14]
module.exports = contacts