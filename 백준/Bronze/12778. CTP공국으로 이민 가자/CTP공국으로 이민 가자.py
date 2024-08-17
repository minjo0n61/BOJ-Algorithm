t = int(input())

for _ in range(t) :
  m, case = input().split()
  data = list(input().split())
  if case == 'C' :
    for i in range(len(data)) :
      data[i] = ord(data[i]) - 64
  else :
    for i in range(len(data)) :
      data[i] = chr(int(data[i]) + 64)

  for i in range(len(data)) :
    print(data[i], end=' ')
  
  print()