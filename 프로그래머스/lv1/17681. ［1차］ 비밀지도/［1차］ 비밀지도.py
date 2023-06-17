
def sol(n,arr,total_lst):
    for i in range(n):
        num = arr[i]
        a=n-1
        lst=list()
        
        
        while True:
            if num==0:
                break
            if 2**a>num:
                a-=1
            else:
                lst.append(a)
                num-=2**a
        for j in lst:
            total_lst[i][n-1-j]=1
            
            

def solution(n, arr1, arr2):
    total_lst = [[0 for col in range(n)] for row in range(n)]

    sol(n,arr1,total_lst)
    sol(n,arr2,total_lst)
    
    prt_lst=list()   

    for i in total_lst:
        str=''
        for j in i:
            if(j==1) :
                str+='#'
            else:
                str+=' '
        prt_lst.append(str)
    
    return prt_lst







