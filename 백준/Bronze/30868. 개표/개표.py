T = int(input())

for i in range(T) :
    N = int(input())
    
    mok = N//5
    nam = N % 5
    
    for i in range(mok) :
        print('++++', end=" ")
        
    for i in range(nam) :
        print("|", end="")
    print("")