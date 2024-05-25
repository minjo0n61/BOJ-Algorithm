import sys
input = sys.stdin.readline

n,m = map(int,input().split())

A = ["".join([i*2 for i in input().rstrip()]) for _ in range(n)]
B = ["".join(input().rstrip()) for _ in range(n)]
    
print('Eyfa' if A==B else 'Not Eyfa')