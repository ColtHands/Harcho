let maxPrime = 2
const num = 600851475143
const timeOfStart = new Date().toLocaleDateString()

for(var i = 0; i < num; i++) {
    console.log(`How long left: ${num-i}`);
    if(num % i === 0) {
        maxPrime = i
    }
}

const timeOfEnd = new Date().toLocaleDateString()

console.log('Time of start', timeOfStart);
console.log('Time of end', timeOfEnd);
console.log(maxPrime)