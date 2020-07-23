class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
    display(){
        console.log("I am Node", this.value)
    }
}
n1=new Node(12);
console.log(n1.value)
n1.display()