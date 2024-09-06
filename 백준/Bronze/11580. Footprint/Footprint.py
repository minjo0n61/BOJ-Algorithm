import sys
l=int(sys.stdin.readline().strip())
text=sys.stdin.readline().strip()
arr,x,y=[(0,0)],0,0
for e in text:
    if e=="S":y-=1;arr.append((x,y))
    elif e=="E":x+=1;arr.append((x,y))
    elif e=="N":y+=1;arr.append((x,y))
    elif e=="W":x-=1;arr.append((x,y))
print(len(set(arr)))