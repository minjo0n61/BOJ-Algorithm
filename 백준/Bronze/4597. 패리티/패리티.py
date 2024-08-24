while 1:
    s=input()
    if s=='#':break
    oneCount=s.count('1')
    if 'e' in s:
        if oneCount%2==0: s=s.replace('e','0')
        else :s=s.replace('e','1')
    elif 'o' in s:
        if oneCount%2==0: s=s.replace('o','1')
        else :s=s.replace('o','0')
    print(s)
