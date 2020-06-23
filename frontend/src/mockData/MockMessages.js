class MockMessage {
    constructor(content: string, sender: string) {
        this.content = content;
        this.sender = sender;
    }
}

const m1 = new MockMessage("Hello, can I schedule a virtual haircut consultation?", "Bob");
const m2 = new MockMessage("Sure, what time?", "Alice");
const m3 = new MockMessage("How does 2pm this Saturday sound?", "Bob");
const m4 = new MockMessage("Sounds great! Here is the meeting link: meet.google.com/appointment", "Alice");
const m5 = new MockMessage("Thanks! See you then", "Bob");


const messages = [m1, m2, m3, m4, m5]
module.exports = messages