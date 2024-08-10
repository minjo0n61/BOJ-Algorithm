alp = [3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]

N, M = map(int, input().split())
A, B = input().split()

minlenth = min(N, M)
AB = []

for i in range(minlenth):
    AB.append(A[i])
    AB.append(B[i])
    
AB += A[minlenth:] + B[minlenth:]
AB = list(map(lambda x : alp[ord(x) - ord('A')], AB))
wordlenth = len(AB)

for i in range(wordlenth - 2):
    for j in range(wordlenth - i - 1):
        AB[j] = (AB[j] + AB[j + 1]) % 10

print('{0}%'.format(AB[0] * 10 + AB[1]))