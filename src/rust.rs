fn main() {
    prime();
    smallest_multiple();
}

fn prime() {
    // let num:i64 = 600851475143;
    let num:i64 = 13195;
    let mut prime:i64 = num % 17;
    
    println!("num is {}", num);

    for i in 1..num {
        // println!("iterations left {}", num-i);
        if num % i == 0 {
            prime = i;
        }
    };
    println!("new prime here {}", prime);
}

fn smallest_multiple() {
    let arr = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let mut num = 3;
    // using fold
    let mut done = false;

    while !done {
        let sum = arr.iter().fold(0i64, |a, &b| (a % num) + (b % num));

        println!("num is {}, sum is {}", num, sum);

        if sum == 0 {
            done = true
        }

        num = num + 1
    }
}