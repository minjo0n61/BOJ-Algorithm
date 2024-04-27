dic={1:'Yakk',2:'Doh',3:'Seh',4:'Ghar',5:'Bang',6:'Sheesh'}          
dic2={1:'Habb Yakk',2:'Dobara',3:'Dousa',4:'Dorgy',5:'Dabash',6:'Dosh'}     
tmp=0                                                                           
T=int(input())
for k in range(1,T+1):
    dice1,dice2=input().split()
    dice1=int(dice1)
    dice2=int(dice2)
    if dice1==dice2:
        print("Case %d:"%k,end=" ")
        print(dic2[dice1])
    elif (dice1==6 and dice2==5)or(dice1==5 and dice2==6):
        print("Case %d: Sheesh Beesh"%k)
    else:
        if dice1>dice2:
           tmp=dice1
           dice1=dice2
           dice2=tmp
        print("Case %d:"%k,end=" ")
        print(dic[dice2]+" "+dic[dice1])

