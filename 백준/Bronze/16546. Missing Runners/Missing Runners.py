N = int(input())
numlist = list(map(int, input().split()))

res = 0
for i in range(N-1):
    res += (i+1)
    res -= numlist[i]
print(res+N)