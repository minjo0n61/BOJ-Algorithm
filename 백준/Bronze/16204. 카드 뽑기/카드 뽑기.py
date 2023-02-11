N, M, K = map(int, input().split())
O = N - M
X = N - O
Ok = N - K
Xk = N - Ok
print(min(O, Ok) + min(X, Xk))