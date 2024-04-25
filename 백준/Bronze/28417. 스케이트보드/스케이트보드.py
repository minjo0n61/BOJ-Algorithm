N = int(input())
result = 0

for _ in range(N):
    Skateboard = list(map(int, input().split()))
    Run = Skateboard[:2]
    Trick = Skateboard[2:]

    Run.sort(reverse=True)
    Trick.sort(reverse=True)

    result = max(result, Run[0] + sum(Trick[:2]))

print(result)