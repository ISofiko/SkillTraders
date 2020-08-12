class MockMessage {
    constructor(content: string, sender: string) {
        this.content = content;
        this.sender = sender;
    }
}

const v1 = new MockMessage("Whatsup Alice, nice to meet you", "Bob");
const v2 = new MockMessage("How are you doing?", "Bob");
const v3 = new MockMessage("Thanks, very well! Nice to meet you too, Bob", "Alice");
const v4 = new MockMessage("I saw on your add that you are offering virtual haircut consultations", "Bob");
const v5 = new MockMessage("Yes, they're $10 for men and $20 for walking you through a woman's haircut", "Alice");
const v6 = new MockMessage("Awesome, I see, thank you.", "Bob");

const m1 = new MockMessage("Hello, can I schedule a virtual haircut consultation?", "Bob");
const m2 = new MockMessage("Sure, what time?", "Alice");
const m3 = new MockMessage("How does 2pm this Saturday sound?", "Bob");
const m4 = new MockMessage("Sounds great! Here is the meeting link: meet.google.com/appointment", "Alice");
const m5 = new MockMessage("Thanks! See you then", "Bob");


const messages = [v1, v2, v3, v4, v5, v6, m1, m2, m3, m4, m5]
//module.exports = messages