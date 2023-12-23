A = list(map(int, input().split()))
B = list(map(int, input().split()))
A_cnt, B_cnt = 0, 0
 
for A_card, B_card in zip(A, B):
    if A_card > B_card:
        A_cnt += 1
    elif A_card < B_card:
        B_cnt += 1
 
if A_cnt > B_cnt:
    print('A')
elif A_cnt < B_cnt:
    print('B')
else:
    print('D')