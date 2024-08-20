C, M = [0, 0, 0], [0, 0, 0]

for x in range(3):
    a, b = map(int, input().split())
    C[x] = a
    M[x] = b

for c in range(100):
    x, nx = c % 3, (c + 1) % 3

    M[x], M[nx] = max(M[x]-(C[nx]-M[nx]), 
                        0), min(C[nx], M[x] + M[nx])

for m in M:
    print(m)