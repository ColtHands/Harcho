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
    let mut num = 1;
    let mut done = false;

    while !done {
        let mut summ = 0;
        for i in 1..20 {
            summ = summ + (num % i);
        }

        println!("num is {}, sum is {}", num, summ);

        if summ == 0 {
            done = true
        }

        num = num + 1
    }
}