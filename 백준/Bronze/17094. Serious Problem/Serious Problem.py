import sys
input = sys.stdin.readline

# 입력
s = int(input().rstrip())
count_e = input().count('e')
print(['2', 'e', 'yee'][(count_e > s - count_e) + ((s - count_e) == count_e) * 2])