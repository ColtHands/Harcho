fn main() {
    // let num:i64 = 600851475143;
    let num:i64 = 13195;
    let mut prime:i64 = num % 17;
    
    println!("num is {}", num);

    for i in 1..num {
        println!("iterations left {}", num-i);
        if(num % i == 0) {
            prime = i;
        }
    };
    println!("new prime here {}", prime);
}