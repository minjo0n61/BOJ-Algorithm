N = int(input())

cnt = 0

for i in range(0,N):
    str = input()

    if str.count('01') >= 1 or str.count('OI'):
        cnt += 1

print(cnt)