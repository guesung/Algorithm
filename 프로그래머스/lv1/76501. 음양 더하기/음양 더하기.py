def solution(absolutes, signs):
    # sign=true ; 양수 / =false ; 음수
    r=0
    # r=sum(absolutes*(-1)**signs)
    
    for i in range(len(absolutes)):
        if signs[i]:
            r+=absolutes[i]
        else:
            r-=absolutes[i]
    
    
    return r