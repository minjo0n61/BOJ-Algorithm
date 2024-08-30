import sys

def text_roll():
    while True:
        num = int(sys.stdin.readline().rstrip())

        if num == 0:
            exit()
        
        roll = 0
        for i in range(num):
            line = sys.stdin.readline().rstrip()
            line += " "
            
            idx = []
            for j in range(len(line)):
                if line[j] == ' ':
                    idx.append(j)
                
            if i == 0:
                roll = idx[0]
                
            for k in range(len(idx)):
                if idx[k] >= roll:
                    roll = idx[k]
                    break
        print(roll+1)
text_roll()