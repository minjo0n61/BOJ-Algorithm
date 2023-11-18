for _ in range(int(input())):
    N = int(input())
    print(sum([n for n in range(1, N+1) if n%2]))