//
// node mystack.js
//
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
        //let item = this.storage[this.count];
        delete this.storage[this.count];
        //return item;
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
myStack.push(3);
console.log('storage', myStack.storage);
myStack.pop();
console.log('storage after pop', myStack.storage);
console.log('peek.storage', myStack.peek());

