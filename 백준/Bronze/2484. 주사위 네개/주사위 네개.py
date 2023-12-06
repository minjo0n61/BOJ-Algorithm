n = int(input())

max_prize = 0
for _ in range(n):
    nums = [0 for _ in range(7)]
    for x in map(int, input().split()):
        nums[x] += 1 

    prize = 0
    for x in range(7):
        if nums[x] == 4:
            prize = 50_000 + x * 5_000
            break
        elif nums[x] == 3:
            prize = 10_000 + x * 1_000
            break
        elif nums[x] == 2:
            if 1 in nums:
                prize = 1_000 + x * 100
                break
            for y in range(7):
                if nums[y] == 2 and y != x:
                    prize = 2_000 + (x+y) * 500
                    break
    if not prize:
        for y in range(6, -1, -1):
            if nums[y] == 1:
                prize = y * 100
                break

    max_prize = max(max_prize, prize)
print(max_prize)