N = int(input())

num = 1
while True:
    if num == N:
        print(1)
        break
    elif num > N:
        print(0)
        break
    num *= 2