def largest_prime_factor(number):
    i = 2
    while number > 1:
        if number % i == 0:
            number /= i
            i -= 1
        i += 1
    return i

print(largest_prime_factor(600851475143))