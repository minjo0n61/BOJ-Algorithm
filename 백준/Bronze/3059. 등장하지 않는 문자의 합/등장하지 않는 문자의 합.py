t = int(input())

for _ in range(t) :
  data = [0] * 27
  value = input()
  for i in range(len(value)) :
    data[int(ord(value[i]))-65] += 1

  result = 0
  for i in range(26) :
    if data[i] == 0 :
      result += i + 65

  print(result)