n, m = map(int, input().split())
numlist = list(map(int, input().split()))

res = numlist[0] % m
for i in numlist[1:]:
    res *= i
    res %= m
print(res)