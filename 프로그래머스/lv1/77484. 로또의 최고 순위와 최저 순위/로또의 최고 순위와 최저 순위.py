def solution(lottos, win_nums):
    # 곂치는 게 몇개있는지 찾아
    cnt=0
    for i in win_nums:
        if i in lottos:
            cnt+=1
    # 최소 ; 곂치는 것 개수 / 최대 ; 곂치는 것 개수 + 0 개수
    mins,maxs=cnt,cnt+lottos.count(0)
    # 값이 1개 이상 ; 7-값
    # 값이 0개 ; 6
    answer = []
    if maxs>=1:
        answer.append(7-maxs)
    else:
        answer.append(6)
    if mins>=1:
        answer.append(7-mins)
    else:
        answer.append(6)  
    return answer