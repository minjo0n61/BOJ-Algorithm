cnt = 0
while True:
    try:
        _ = input()
        cnt += 1
    except EOFError:
        break
print(cnt)