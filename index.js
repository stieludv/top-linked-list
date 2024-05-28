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
        const tailNode = tail();
        if (tailNode !== null) {
            tailNode.nextNode = newNode;
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
        const headNode = head();
        if (headNode !== null) {
            newNode.nextNode = headNode;
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

console.log(myLinkedList.head());