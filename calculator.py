
from turtle import circle


amount = 22

# num = 120 / amount

# for i in range(1, amount+1):
#     result = num * i
#     print(result)
sum  = 0
list_num_lucky = [2, 4, 7, 9, 13, 15, 18, 20]
for i in range(1, amount+1):
    if i in list_num_lucky:
        sum += 15
        print(sum)
    else: 
        sum += 17.14
        print(sum)
