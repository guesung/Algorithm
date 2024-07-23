function solution(nodeinfo) {
    const newNodeInfo = nodeinfo.map((node,index)=>[index+1,...node])
    newNodeInfo.sort((a,b)=>b[2]-a[2]); // y순서대로 내림차순 정렬
    
    const rootNode = new Tree(null);
    newNodeInfo.forEach(([num,x,y])=>{
        rootNode.append(new Tree(num,x,y));
    })
    
    const preOrderedArray = [];
    const postOrderedArray = [];
    
    function order(node){
        preOrderedArray.push(node.num);
        if(node.left) order(node.left);
        if(node.right) order(node.right);
        postOrderedArray.push(node.num)
    }
    order(rootNode)
    return [preOrderedArray,postOrderedArray]
}

class Tree {
    constructor(num,x,y){
        this.num = num;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
    append(node){
        if(this.num === null){
            this.num = node.num;
            this.x = node.x;
            this.y = node.y;
            return;
        }
        if(node.x < this.x){ // 추가된 노드가 왼쪽 자식 노드인 경우
            if(this.left){ // 왼쪽 자식 노드가 이미 존재하는 경우, 한 번 더 파고든다.
                this.left.append(node)
            }else{
                this.left = node;    
            }
        }
        else{ // 추가된 노드가 오른쪽 자식 노드인 경우
            if(this.right){
                this.right.append(node);                
            }else{
                this.right = node;
            }
        }
    }
}