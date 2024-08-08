while 1 :
    s = input()
    if s == '#' :
        break
    lst = [0] * 26
    for i in s.lower() :
        if i.isalpha() :
            lst[ord(i)-97] = 1
        else :
            continue
    print(lst.count(1))