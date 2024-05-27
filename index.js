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
    const append = (value) => {

    }

    const prepend = (value) => {
        
    }

    const size = () => {
        
    }

    const head = () => {
        
    }

    const tail = () => {
        
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

    }
};