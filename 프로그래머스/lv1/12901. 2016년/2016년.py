def solution(a, b):
    dates = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    
    if a==1 and b==1:
        return "FRI"
    
    month,date=1,2
    while True:
        if month == a and date + 7 > b:
            return days[6-(date+7-b)]
        if date>dates[month]:
            date-=(dates[month]+7)
            month+=1

        else:
            date+=7
            print(month,date)
    