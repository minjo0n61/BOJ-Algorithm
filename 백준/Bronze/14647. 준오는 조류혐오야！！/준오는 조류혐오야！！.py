def cnt_max_matrix(nums):
    row_max=0
    row=0
    for i in range(len(nums)):
        tmp_max=0
        for j in nums[i]:
            tmp_max+=j.count('9')
        if row_max<tmp_max:
            row_max=tmp_max
            row=i
    return row_max
def cnt_matrix(nums):
    cnt_max=0
    for i in nums:
        for j in i:
            cnt_max+=j.count('9')
    return cnt_max
 
def transpose(matrix):
    rows = len(matrix)
    columns = len(matrix[0])
 
    matrix_T = []
    for j in range(columns):
        row = []
        for i in range(rows):
           row.append(matrix[i][j])
        matrix_T.append(row)
 
    return matrix_T
 
n,m=map(int,input().split())
nums=[]
for i in range(n):
    nums.append(list(map(str,input().split())))
row_max=cnt_max_matrix(nums)
col_max=cnt_max_matrix(transpose(nums))
print(cnt_matrix(nums)- max(row_max,col_max))