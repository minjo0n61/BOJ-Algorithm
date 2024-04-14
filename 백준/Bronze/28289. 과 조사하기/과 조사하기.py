P = int(input())
result = [0] * 4

for _ in range(P):
    student_info = list(map(int, input().split()))

    if student_info[0] == 1:
        result[3] += 1
        continue

    if student_info[1] == 1 or student_info[1] == 2:
        result[0] += 1
    elif student_info[1] == 3:
        result[1] += 1
    else:
        result[2] += 1

for r in result:
    print(r)