import string

t = int(input())

tmp = string.digits+string.ascii_lowercase
def conv(num, base):
    q, r = divmod(num, base)
    if q == 0 :
        return tmp[r]
    else :
        return conv(q, base) + tmp[r]

print(conv(t, 9))