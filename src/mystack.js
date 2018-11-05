// var myStack = new Stack();
const Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // myStack.push(1);
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // myStack.pop()
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let item = this.storage[this.count];
        delete this.storage[this.count];
        return item;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // myStack.peek()
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

// Exec task
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
