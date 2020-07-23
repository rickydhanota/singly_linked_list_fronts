class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
    display(){
        console.log("I am Node", this.value)
    }
}

//single linked link class

class SLL{
    constructor(val){
        this.head= Node(val);
    }
    addNode(val){

    }
    removeNode(val){

    }
}

sll=SLL();
n1=new Node(12);


n1=new Node(12);
console.log(n1.value)
n1.display()