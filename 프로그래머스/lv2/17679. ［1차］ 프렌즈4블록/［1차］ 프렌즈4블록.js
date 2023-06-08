function solution(m, n, board) {
    var answer = 0;
    
    const check = (y,x) => {
        let tmp = board[y][x];
        for(let i=0;i<2;i++){
            for(let j=0;j<2;j++){
                if(board[y+i][x+j]!==tmp){
                    return false;
                }
            }
        }
        
        
        
        return true;
    }
    let arr = []
    board = board.map(it=>it.split(''))
    
    let toggle2;
    const func = () => {
        toggle2 = false;
        for(let i=0;i<m-1;i++){
            for(let j=0;j<n-1;j++){
                if(check(i,j)){
                    toggle2 = true;
                    for(let a=0;a<2;a++){
                        for(let b=0;b<2;b++){
                            arr.push([i+a,j+b]);                            
                        }
                    }

                }
            }
        }
        arr.forEach(it=>{
            board[it[0]][it[1]]=null
        })
        let toggle = false;
        do{
            toggle = false;
            board.forEach((item,index)=>{
               item.forEach((it,i)=>{
                   if(it===null && index>0 && board[index-1][i]!==null){
                       toggle = true;
                       let tmp = board[index-1][i];
                       board[index-1][i]=null;
                       board[index][i]=tmp
                   }
               }) 
            })
        }while(toggle)
        arr=[];
    }
    for(let i=0;i<1000;i++){
    func();        
    }
    
    
        
    console.log(arr,board)
    let cnt = 0;
    board.forEach(item=>{
        item.forEach(it=>{
            if(it===null) cnt++;
        })
    })
    
    return cnt;
}