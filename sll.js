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
        this.head= new Node(val);
    }
    addNode(val){
        if (this.head==null){ //This if statement is part of the removeNode as well as front function as well
            this.head = new Node(val);
            return this
        }
        else{
            var restOfList = this.head;
            this.head = new Node(val);
            this.head.next = restOfList;
            return this
        }
    }
    removeFront(){
        this.head==this.head.next;
        return this
    }
    front(){
        this.head.value;
        return this //return this.head.value or can we do return this?
    }
}


sll= new SLL();
n1=new Node(12);
n2=new Node(13);
n3=new Node(14);

console.log(n1.value)
n1.display()
sll.front()