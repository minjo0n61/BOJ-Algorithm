stack = []

while 1:
    word = input()
    if word == "고무오리 디버깅 끝":
        if len(stack) == 0:
            print("고무오리야 사랑해")
            break
        else:
            print("힝구")
            break

    if word == "문제":
        stack.append(1)
    elif word == "고무오리":
        if len(stack) == 0:
            stack.append(1)
            stack.append(1)
        else:
            stack.pop()