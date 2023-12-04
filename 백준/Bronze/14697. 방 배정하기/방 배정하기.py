A, B, C, N=map(int, input().split())
a=[-1 for _ in range(N+1)]
for i in range(min(A, N)):
    a[i]=0
if A<=N:
    a[A]=1
if B<=N:
    a[B]=1
if C<=N:
    a[C]=1
def f(n):
    if a[n]==-1:
        if n<B:
            a[n]=f(n-A)
        elif n<C:
            a[n]=max(f(n-A), f(n-B))
        else:
            a[n]=max(f(n-A), f(n-B), f(n-C))
    return a[n]
if N<A:
    print(0)
else:
    print(f(N))