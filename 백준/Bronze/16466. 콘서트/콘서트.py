n = int(input())
nums = sorted(list(map(int, input().split())))
isSame = True
for i in range(n):
    if (i + 1) != nums[i]:
        print(i + 1)
        isSame = False
        break
if isSame:
    print(n + 1)