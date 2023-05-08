def counting_vowels(word):
    vowels = ["a", "e", "i", "o", "u"]
    
    return len([char for char in list(word) if char in vowels])


if __name__ == "__main__":
    N = int(input())
    S = input()
    
    print(counting_vowels(word=S))