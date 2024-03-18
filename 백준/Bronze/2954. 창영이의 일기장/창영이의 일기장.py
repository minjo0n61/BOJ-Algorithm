str = input()
i = 0
mo = ['a', 'e', 'i', 'o', 'u']
while i < len(str):
    print(str[i], end='')
    if str[i] in mo:
        i += 2
    i += 1