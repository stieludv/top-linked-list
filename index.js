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
        
    }

    const pop = () => {
        
    }

    const contains = (value) => {
        
    }

    const find = (value) => {
        
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

myLinkedList.append("test");
myLinkedList.append("test2");
myLinkedList.prepend("test3");
console.log(myLinkedList);
console.log(myLinkedList.head());
console.log("toString:", myLinkedList.toString(), "\nsize:", myLinkedList.size());

console.log(myLinkedList.head().getNodeValue(), myLinkedList.head().getNextNode().getNodeValue(), myLinkedList.head().getNextNode().getNextNode().getNodeValue());