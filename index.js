const linkedListNode = (value = null) => {
    let nextNode = null;
    let nodeValue = value;

    const getNextNode = () => {
        return nextNode;
    }

    const getNodeValue = () => {
        return nodeValue;
    }

    const setNextNode = (node) => {
        nextNode = node;
    }

    const setNodeValue = (value) => {
        nodeValue = value;
    }

    return {
        getNextNode,
        getNodeValue,
        setNextNode,
        setNodeValue,
    }
}

const linkedList = () => {
    let headNode = null;
    let tailNode = null;
    let linkedListSize = 0;

    const append = (value) => {
        const newNode = linkedListNode(value);
        const previousTailNode = tail();
        if (previousTailNode !== null) {
            previousTailNode.setNextNode(newNode);
            tailNode = newNode;
            linkedListSize++;
        }
        else {
            headNode = newNode;
            tailNode = newNode;
            linkedListSize = 1;
        }
    }

    const prepend = (value) => {
        const newNode = linkedListNode(value);
        const previousHeadNode = head();
        if (previousHeadNode !== null) {
            newNode.setNextNode(previousHeadNode);
            headNode = newNode;
            linkedListSize++;
        }
        else {
            headNode = newNode;
            tailNode = newNode;
            linkedListSize = 1;
        }
    }

    const size = () => {
        return linkedListSize;
    }

    const head = () => {
        return headNode;
    }

    const tail = () => {
        return tailNode;
    }

    const at = (index) => {
        if (index > size - 1 || index < 0) return false;
        let nextNode = head();
        for (let i = 1; i <= index; i++) {
            nextNode = nextNode.getNextNode();
        }
        return nextNode;
    }

    const pop = () => {
        if (size() === 1) {
            let lastNode = head();
            headNode = null;
            tailNode = null;
            linkedListSize = 0;
            return lastNode;
        }
        if (size() > 1) {
            let nextLastNode = at(size() - 2);
            let lastNode = nextLastNode.getNextNode();
            nextLastNode.setNextNode(null);
            linkedListSize--;
            return lastNode;
        }
    }

    const shift = () => {
        if (size() === 1) {
            let firstNode = head();
            headNode = null;
            tailNode = null;
            linkedListSize = 0;
            return firstNode;
        }
        if (size() > 0) {
            let firstNode = head();
            let secondNode = firstNode.getNextNode();
            headNode = secondNode();
            if (size() === 2) {
                tailNode = secondNode();
            }
            firstNode.setNextNode(null);
            linkedListSize--;
            return firstNode;
        }
    }

    const contains = (value) => {
        let nextNode = head();
        for (let i = 0; i < size(); i++) {
            if (value === nextNode.getNodeValue()) {
                return true;
                break;
            }
            nextNode = nextNode.getNextNode()
        }
        return false;
    }

    const find = (value) => {
        let nextNode = head();
        for (let i = 0; i < size(); i++) {
            if (value === nextNode.getNodeValue()) {
                return [i, nextNode];
                break;
            }
            nextNode = nextNode.getNextNode();
        }
        return false;
    }

    const toString = () => {
        if (size() > 0) {
            let nextNode = head();
            let linkedListString = `${nextNode.getNodeValue()} => `;
    
            for (let i = 2; i < size(); i++) {
                nextNode = nextNode.getNextNode();
                linkedListString = linkedListString + nextNode.getNodeValue() + " => ";
            }
    
            nextNode = nextNode.getNextNode();
            linkedListString = linkedListString + nextNode.getNodeValue();
    
            return linkedListString;
        }
        else {
            return "List is empty";
        }
    }

    const insertAt = (index) => {
        
    }

    const removeAt = (index) => {
        
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
};

const myLinkedList = linkedList();

myLinkedList.prepend("test0");
myLinkedList.append("test");
myLinkedList.append("test2");
myLinkedList.prepend("test3");
myLinkedList.prepend("test4");
myLinkedList.append("test5");
console.log(myLinkedList);
console.log(myLinkedList.head());
console.log("toString:", myLinkedList.toString(), "\nsize:", myLinkedList.size());

console.log(myLinkedList.head().getNodeValue(), myLinkedList.head().getNextNode().getNodeValue(), myLinkedList.head().getNextNode().getNextNode().getNodeValue());

console.log(myLinkedList.contains("test5"), myLinkedList.contains("test0"), myLinkedList.contains("test4"), myLinkedList.contains("tessttt"));

console.log(myLinkedList.find("test3"), myLinkedList.find(983));

console.log(myLinkedList.at(0).getNodeValue(), myLinkedList.at(2).getNodeValue());

console.log(myLinkedList.pop().getNodeValue());
console.log(myLinkedList.toString());