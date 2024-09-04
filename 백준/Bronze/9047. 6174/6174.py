import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = input().rstrip()
    cnt = 0

    while N != "6174":
        cnt += 1

        a = int("".join(sorted(N, reverse=True)))
        b = int("".join(sorted(N)))
        N = str(a - b)

        if len(N) < 4:
            for _ in range(4 - len(N)):
                N += "0"

    print(cnt)