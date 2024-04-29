import sys
input = sys.stdin.readline

N = int(input())
x = list(map(int, input().split()))

res = 0
for i, lemon in enumerate(x, 1):
    tmp = lemon - (N+1-i)
    res = max(res, tmp)
print(res)