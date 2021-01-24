# #Write a function named first_three_multiples() that has one parameter named num.

# This function should print the first three multiples of num. Then, it should return the third multiple.

# For example, first_three_multiples(7) should print 7, 14, and 21 on three different lines, and return 21.

# Write your first_three_multiples function here
def first_three_multiples(num): 
  print(num)
  print(num*2)
  print(num*3)
  return(num*3)

# Uncomment these function calls to test your first_three_multiples function:
first_three_multiples(10)
# should print 10, 20, 30, and return 30
first_three_multiples(0)
# should print 0, 0, 0, and return 0





# Create a function called tip() that has two parameters named total and percentage.

# This function should return the amount you should tip given a total and the percentage you want to tip.

# Write your tip function here:
def tip(total, percentage):
  tip_percentage = percentage/100
  total_tip = total*tip_percentage
  return "A tip of " + str(percentage) + "% is $" + str(total_tip)

# Uncomment these function calls to test your tip function:
print(tip(10, 25))
# should print 2.5
print(tip(0, 100))
# should print 0.0





# Write a function named introduction() that has two parameters named first_name and last_name.

# The function should return the last_name, followed by a comma, a space, first_name another space, and finally last_name.

# Write your introduction function here:
def introduction(first_name, last_name):
  return last_name + ", " + first_name + " " + last_name


# Uncomment these function calls to test your introduction function:
print(introduction("James", "Bond"))
# should print Bond, James Bond
print(introduction("Maya", "Angelou"))
# should print Angelou, Maya Angelou





# Some say that every one year of a human’s life is equivalent to seven years of a dog’s life. Write a function named dog_years() that has two parameters named name and age.

# The function should compute the age in dog years and return the following string:

# "{name}, you are {age} years old in dog years"
# Test this function with your name and your age!

# Write your dog_years function here:
def dog_years(name, age):
  dog_age = age*7
  return f'{name}, you are {dog_age} years old in dog years'

# Uncomment these function calls to test your dog_years function:
print(dog_years("Lola", 16))
# should print "Lola, you are 112 years old in dog years"
print(dog_years("Baby", 0))
# should print "Baby, you are 0 years old in dog years"





# Create a function named lots_of_math(). This function should have four parameters named a, b, c, and d. The function should print 3 lines and return 1 value.

# First, print the sum of a and b.

# Second, print d subtracted from c.

# Third, print the first number printed, multiplied by the second number printed.

# Finally, return the third number printed mod a.

# Write your lots_of_math function here:
def lots_of_math(a, b, c, d):
  a_sum =  a + b
  print(a_sum)
  a_difference = d - c
  print(a_difference)
  product = a_sum * a_difference
  print(product)
  return product % a

# Uncomment these function calls to test your lots_of_math function:
print(lots_of_math(1, 2, 3, 4))
# should print 3, 1, 3, 0
print(lots_of_math(1, 1, 1, 1))
# should print 2, 0, 0, 0
