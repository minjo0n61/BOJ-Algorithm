li = []
li += map(int, input().split())
li += list(map(int, input().split()))[::-1]

a = []
for i in range(4):
    s = li[0] / li[3] + li[1] / li[2]
    a.append(s)
    li = [li[-1]] + li[:-1]
print(a.index(max(a)))