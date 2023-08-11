def fill_the_rowboats(number):
    answer_list = []
    
    number_list = list(range(1, number + 1))
    
    slice_num = len(number_list) // 6 if len(number_list) % 6 == 0 else len(number_list) // 6 + 1
    
    for slice_idx in range(slice_num):
        slice_list = list(map(str, number_list[6 * slice_idx: 6 * (slice_idx + 1)]))
        
        slice_list.append("Go!")
        
        answer_list.append(" ".join(slice_list))
        
    return " ".join(answer_list)
        
    
if __name__ == "__main__":
    number = int(input())
    
    print(fill_the_rowboats(number=number))