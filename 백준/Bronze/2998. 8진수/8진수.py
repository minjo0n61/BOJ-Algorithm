n = input()
if len(n) % 3 != 0:
    n = n.zfill((len(n) // 3 + 1) * 3)
dic = {'000': '0', '001': '1', '010': '2', 
'011': '3', '100': '4', '101': '5', '110': '6', '111': '7'}
result = ''
for i in range(0, len(n), 3):
    tmp = n[i:i+3]
    result += dic[tmp]
 
print(result)
