query, res = input().split('=')
print(["YES", "NO"][eval(query) != int(res)])