N = int(input())
cnt = 0
for i in range(1, N+1):
    cnt += str(i).count('3')+str(i).count('6')+str(i).count('9')
print(cnt)