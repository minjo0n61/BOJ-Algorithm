def check_credit_card_number(card_number):
    is_valid = "F"
    
    sum_num = 0
    
    card_number = list(card_number)
    
    for i, card_num in enumerate(card_number):
        if (i + 1) % 2 != 0:
            number = int(card_num) * 2
            
            if number > 9:
                number = str(number)
                sum_num += int(number[0]) + int(number[1])
            else:
                sum_num += number
        else:
            sum_num += int(card_num)
                
    if sum_num % 10 == 0:
        is_valid = "T"
    
    return is_valid

if __name__ == "__main__":
    for _ in range(int(input())):
        card_number = input()
        print(check_credit_card_number(card_number))