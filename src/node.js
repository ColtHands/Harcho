// def largest_prime_factor(number):
//     i = 2
//     while number > 1:
//         if number % i == 0:
//             number /= i;
//     i -= 1
//     i += 1
//     return i

const largest_prime_factor = (num) => {
    let i = 2
    while(num > 1) {
        console.log("WHILE I", i);
        console.log("WHILE num", num);
        if(num % i == 0){
            num = num / i
            i -= 1
        }
        i += 1
    }
    return i
}

console.log(largest_prime_factor(600851475143));