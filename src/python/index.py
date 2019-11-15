def largest_prime_factor(number):
    i = 2
    while number > 1:
        if number % i == 0:
            number /= i
            i -= 1
        i += 1
    return i

print(largest_prime_factor(600851475143))

def linearFn(x1, y1, x2, y2):
    return "(" + " ".join([str(int((y2 - y1) / (x2 - x1))), str(int(y1 - (((y2 - y1) / (x2 - x1)) * x1)))]) + ")"

s = """722 -15383 -873 18112
937 6308 -130 -1161
250 2114 -986 -5302
899 87722 -98 -9984
-732 -36027 908 44333
-796 -51129 -971 -62154
-755 -46933 -604 -37722
815 -19138 548 -12730
675 -52788 267 -20556
-863 61885 346 -23954
359 8643 215 5331
-883 87675 493 -48549
402 -36795 734 -66675
762 -44352 -982 58544"""

def abbeyLinearFn():
    for str in s.split("\n"):
        print(linearFn(int(str.split()[0]), int(str.split()[1]), int(str.split()[2]), int(str.split()[3])))

abbeyLinearFn()

print("hi")