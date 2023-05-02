def solution(N, stages):
    answer = []
    
    lst_sum = [0 for i in range(N+1)]
    
    for i in range(1,N+1):
        lst_sum[i]=stages.count(i)
    
    lst_ratio = []
    n=len(stages)
    
    for i in range(1,N+1):
        if n>0:
            lst_ratio.append((lst_sum[i]/n,i))
            n-=lst_sum[i]
        else:
            lst_ratio.append((0,i))

    lst_ratio.sort(reverse=True, key=lambda student: student[0])

    for i in lst_ratio:
        answer.append(i[1])
    
    return answer