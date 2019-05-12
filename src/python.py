def largest_prime_factor(number):
    i = 2
    while number > 1:
        if number % i == 0:
            number /= i
            i -= 1
        i += 1
    return i

print(largest_prime_factor(600851475143))

def smallest_multiple(num):
    i = 1
    loop = True
    arr = [x for x in range(1, 21)]

    while loop:
        i++
        for x in arr:

    return "asd"

smallest_multiple(123)