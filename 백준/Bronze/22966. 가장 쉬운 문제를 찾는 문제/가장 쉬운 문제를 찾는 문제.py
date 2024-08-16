n=int(input())
tmp=[]
for i in range(n):
    tmp.append(input().split())
tmp=sorted(tmp,key= lambda  x:x[1])
print(tmp[0][0])