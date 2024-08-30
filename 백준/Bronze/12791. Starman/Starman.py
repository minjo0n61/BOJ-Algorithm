def sol(album,s,e):
    cnt = 0
    answer=[]
    for i in album:
        if i[0]>=s and i[0]<=e:
            cnt+=1
            answer.append(i)
        elif i[0]>e:
            break
    print(cnt)
    for i in answer:
        print(i[0],i[1])
if __name__ == '__main__':
    bowie = [[1967, 'DavidBowie'],
             [1969, 'SpaceOddity'],
             [1970, 'TheManWhoSoldTheWorld'],
             [1971, 'HunkyDory'],
             [1972, 'TheRiseAndFallOfZiggyStardustAndTheSpidersFromMars'],
             [1973, 'AladdinSane'],
             [1973, 'PinUps'],
             [1974, 'DiamondDogs'],
             [1975, 'YoungAmericans'],
             [1976, 'StationToStation'],
             [1977, 'Low'],
             [1977, 'Heroes'],
             [1979, 'Lodger'],
             [1980, 'ScaryMonstersAndSuperCreeps'],
             [1983, 'LetsDance'],
             [1984, 'Tonight'],
             [1987, 'NeverLetMeDown'],
             [1993, 'BlackTieWhiteNoise'],
             [1995, '1.Outside'],
             [1997, 'Earthling'],
             [1999, 'Hours'],
             [2002, 'Heathen'],
             [2003, 'Reality'],
             [2013, 'TheNextDay'],
             [2016, 'BlackStar']]
    t= int(input())
    for i in range(t):
        s ,e =map(int,input().split())
        sol(bowie,s,e)
