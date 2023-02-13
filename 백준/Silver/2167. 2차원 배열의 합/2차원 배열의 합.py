import sys

def prefix_sum(arr):
    N = len(arr)
    M = len(arr[0])
    for i in range(N):
        for j in range(1, M):
            arr[i][j] += arr[i][j-1]
    for i in range(1, N):
        for j in range(M):
            arr[i][j] += arr[i-1][j]
    return arr

def query(ps, i, j, x, y):
    s = ps[x][y]
    if i > 0:
        s -= ps[i-1][y]
    if j > 0:
        s -= ps[x][j-1]
    if i > 0 and j > 0:
        s += ps[i-1][j-1]
    return s

if __name__ == "__main__":
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    ps = prefix_sum(arr)
    K = int(input().strip())
    for i in range(K):
        i, j, x, y = map(int, input().split())
        i, j, x, y = i-1, j-1, x-1, y-1
        print(query(ps, i, j, x, y))
