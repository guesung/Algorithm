class BinaryTree {
    constructor(node,xValue,parent){
        this.node = node;
        this.xValue = xValue;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    _toLeft(node,xValue){
        this.left
        ? this.left.insert(node,xValue)
        : this.left = new BinaryTree(node,xValue,this.node)
    }
    _toRight(node,xValue){
        this.right
        ? this.right.insert(node,xValue)
        : this.right = new BinaryTree(node,xValue,this.node)
    }
    
    insert(node,xValue){
        xValue <= this.xValue
        ? this._toLeft(node,xValue)
        : this._toRight(node,xValue)
    }
}

function solution(nodeinfo) {
    var answer = [[]];
    nodeinfo = nodeinfo.map((node,index) => [index+1,node[0],node[1]])
//     nodeinfo는 [노드 번호, x좌표, y좌표]
    nodeinfo.sort((aNode,bNode)=>aNode[1]-bNode[1]).sort((aNode,bNode)=>bNode[2]-aNode[2])
//     y좌표를 기준으로 내림차순 & x좌표를 기준으로 오름차순 정렬
    
    const binaryTree = new BinaryTree(nodeinfo[0][0],nodeinfo[0][1],null);;
    for(let i=1;i<nodeinfo.length;i++){
        binaryTree.insert(nodeinfo[i][0],nodeinfo[i][1])
    }
//     트리를 순회하며 전위 순회 / 후외 순회
//     1. 전위 순회 : 루트 노드 > left > right
//     이미 순회한 노드라면 순회하지 않는다.
//     1.1 루트 노드 순회
//     1.2 왼쪽 노드 순회
//     1.3 왼쪽 노드를 이미 순회 했다면 오른쪽 노드 순회
//     1.4 왼쪽, 오른쪽 노드를 모두 순회 했다면 부모 노드로 올라가서 다시 순회
    const preOrderArray = [];
    const searchPreOrder = (tree) => {
        preOrderArray.push(tree.node)
        if(tree.left && !preOrderArray.includes(tree.left.node)){
            searchPreOrder(tree.left)
        }
        if(tree.right && !preOrderArray.includes(tree.right.node)){
            searchPreOrder(tree.right)
        }
    }
    searchPreOrder(binaryTree)

    const postOrderArray = [];
    const searchPostOrder = (tree) => {
        if(tree.left) searchPostOrder(tree.left);
        if(tree.right) searchPostOrder(tree.right);
        if(!postOrderArray.includes(tree.node)) postOrderArray.push(tree.node)
    }
    searchPostOrder(binaryTree)
//     2. 후위 순회 : left > right > 루트 노드
//     2.1 가장 left > left 자식 노드를 찾음
//     2.2 해당 노드를 순회
//     2.3 해당 노드의 부모 노드로 올라가 오른쪽 노드가 있는지 체크
//     2.4 있다면 순회
//     2.5 없다면 부모노드 탐색
//     2.6 부모노드의 부모노드로 올라가 오른쪽 자식 노드 순회
//     2.7. 해당 노드도 동일하게 순회 후 부모노드 탐색
    
    
    
    return [preOrderArray,postOrderArray];
}