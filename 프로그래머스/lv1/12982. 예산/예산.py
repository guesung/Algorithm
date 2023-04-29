def solution(d, budget):
    sum,cnt=0,0
    d.sort()
    for i in range(len(d)):
        if sum+d[i]<=budget:
            sum+=d[i]
        else:
            return i
    return len(d)