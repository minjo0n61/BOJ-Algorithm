fs, fl = map(int, input().split())
cs, cl= map(int, input().split())

if cs>=fl or cl<=fs:
    print( fl-fs + cl-cs)
else:
    print( max(fl,cl) - min(fs,cs) )