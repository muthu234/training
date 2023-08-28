# Create a function to generate the Pascal's triangle up to a given number of rows
def generate_pascals_triangle(num_rows):
    triangle = []
    for i in range(num_rows):
        row = [1]  
        if i > 0:
            prev_row = triangle[i - 1]
            for j in range(1, i):
                row.append(prev_row[j - 1] + prev_row[j])
            row.append(1)  
        triangle.append(row)
    return triangle

# Test number of rows
num_rows = 5

pascals_triangle = generate_pascals_triangle(num_rows)
for row in pascals_triangle:
    print(row)
