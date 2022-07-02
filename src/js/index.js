// const log = (...args) => { console.log(JSON.stringify(args)) }

// const martingaleBinaryOptions = () => {
//     const winPercentage = 0.86
//     let staringMoney = 10000
//     let startingBet = 5
//     for(let i = 1 i <= 1000 i++) {
//         console.log(`${i}: staringMoney: ${staringMoney} | startingBet: ${startingBet}`)
//         const coinFlip = Math.random() < 0.5
//         staringMoney = staringMoney - startingBet
//         if(startingBet > staringMoney) {
//             console.log('LOST ALL')
//             break
//         }

//         if(coinFlip) {
//             const winMoney = startingBet + startingBet * winPercentage
//             staringMoney = staringMoney + winMoney
//             startingBet = 10
//             console.log(`Won: ${winMoney}`)
//         } else {
//             console.log(`Lost: ${startingBet}`)
//             startingBet = startingBet * 2
//         }
//     }
//     console.log('staringMoney', staringMoney)
// }

// martingaleBinaryOptions()

// function quickSort(arr) {
//     log('-------------')
//     const pivotIndex = Math.round(arr.length / 2)
//     const pivotValue = arr[pivotIndex]
    
//     log('arr before pivot swap', arr)
//     log([arr[pivotIndex], arr[arr.length-1]] = [arr[arr.length-1], arr[pivotIndex]])
//     log('arr after the pivot swap', arr)
  
//     const itemIndexFromLeftThatIsLargerThenThePivotValue = arr.findIndex(e => e > pivotValue)
//     const itemIndexFromRightThatIsSmallerThenThePivotValue = arr.length - arr.slice().reverse().findIndex(e => e < pivotValue) - 1

  
//     log('! arr[itemIndexFromRightThatIsSmallerThenThePivotValue]', arr[itemIndexFromRightThatIsSmallerThenThePivotValue])
  
//     log([arr[itemIndexFromLeftThatIsLargerThenThePivotValue], arr[itemIndexFromRightThatIsSmallerThenThePivotValue]] = [arr[itemIndexFromRightThatIsSmallerThenThePivotValue], arr[itemIndexFromLeftThatIsLargerThenThePivotValue]])
  
//     log('arr after 1st iteration of swapping elements', arr)
  
    
//     log('pivot', arr[pivotIndex])
//     log('lastitem', arr[arr.length-1])
//     log('-------------')
//     return arr
// }

// quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])

// var searchInsert = function(nums, target, start = 0, end = nums.length-1) {
//     let mid = Math.round((end - start) / 2) + start

//     console.log(`searchInsert with ${nums}, looking for ${target}`, '|', 'start', start, '|', 'end', end, '|', `nums[${mid}]`, nums, 'is', nums[mid])
    
//     if(target === nums[mid]) {
//         return mid
//     }

//     if(start > nums.length-1) {
//         return nums.length
//     }

//     if(start > end) {
//         return start
//     }

//     if(start === end) {
//         if(target > nums[start]) {
//             return start + 1
//         } else {
//             return start
//         }
//     }
    
//     if(target > nums[mid]) {
//         return searchInsert(nums, target, mid+1, end)
//     }

//     if(target < nums[mid]) {
//         return searchInsert(nums, target, start, mid-1)
//     }
// }

// let valueToInsert = searchInsert([1,2,4,6,7], 3)

// // 2

// console.log('valueToInsert', valueToInsert)

// var maximumWhiteTiles = function(tiles, carpetLen) {
//     let carpetArr = []
//     let ans1 = []
//     let maxCarpetCoverage = 0
//     let ans = tiles.map(tile => new Array(tile[1]).fill(false).map((e,i) => i >= tile[0]-1 && i <= tile[1]-1)).forEach(el => {
//         // console.log('asd')
//         el.forEach((e,i) => {
//             // console.log('tile number', e, i)
//             if(e) {
//                 carpetArr[i] = e
//             }

//             if(e == false && carpetArr[i] != true) {
//                 carpetArr[i] = false
//             }
//         })
//     })

//     let carpetCoverage = carpetArr.slice(0, carpetLen).filter(Boolean).length

//     for(let i = 0 i < carpetArr.length i++) {
//         // console.log('carpetCoverage', carpetCoverage)
//         if(carpetCoverage > maxCarpetCoverage) {
//             maxCarpetCoverage = carpetCoverage
//         }
//     }

//     console.log('maxCarpetCoverage', maxCarpetCoverage)

//     return maxCarpetCoverage
// }

// console.time('maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)')
// maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)
// console.timeEnd('maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)')

// console.time('maximumWhiteTiles([[10,11],[1,1]], 2)')
// maximumWhiteTiles([[10,11],[1,1]], 2)
// console.timeEnd('maximumWhiteTiles([[10,11],[1,1]], 2)')

// console.time('maximumWhiteTiles mega')
// maximumWhiteTiles([[60992,61033],[61214,61250],[57114,57134],[61897,61910],[58688,58731],[54961,54963],[61481,61524],[56463,56502],[61284,61297],[56022,56026],[56294,56298],[61140,61140],[56144,56170],[61454,61472],[55364,55381],[55596,55634],[55186,55225],[57981,58007],[62122,62153],[57052,57056],[57881,57907],[59419,59458],[57705,57749],[60553,60566],[58184,58188],[61653,61691],[57351,57364],[59790,59821],[58428,58457],[62027,62044],[57565,57607],[61931,61973],[55316,55339],[58778,58816],[57759,57771],[56981,57029],[60504,60523],[60349,60391],[56954,56964],[56859,56881],[59605,59653],[59561,59573],[60121,60137],[58866,58889],[55432,55466],[60896,60917],[56310,56353],[58641,58650],[59495,59495],[56662,56665],[60437,60487],[55544,55548],[58545,58572],[59162,59191],[57245,57269],[55037,55052],[59749,59749],[59377,59407],[56923,56927],[60708,60738],[60273,60315],[61337,61370],[58022,58039],[57656,57673],[57837,57872],[55132,55173],[61603,61616],[54788,54833],[60160,60184],[54921,54952],[58359,58377],[59981,59997],[59862,59907],[56074,56104],[58480,58489],[62189,62191],[62107,62115],[57955,57976],[57397,57435],[59198,59227],[58275,58318],[57546,57557],[58223,58249],[57316,57328],[54879,54885],[55285,55308],[57774,57791],[54990,54995],[61734,61782],[60813,60850],[55786,55834],[60223,60267],[60968,60983],[55076,55086],[59311,59335],[56532,56575],[57471,57499],[57174,57207],[61994,62001],[59505,59548],[61172,61188],[55495,55511],[55558,55574],[57069,57073],[60596,60635],[56394,56440],[61201,61208],[55647,55686],[59926,59975],[55729,55735],[61569,61587],[55978,55992],[60652,60676],[59676,59715],[58968,59014],[60047,60088],[56219,56268],[61849,61864],[58595,58604],[61791,61815],[58071,58094],[56032,56062],[55877,55922],[61414,61442],[59263,59292],[56781,56830],[56603,56618],[61089,61118],[58917,58967],[58531,58531],[58138,58183],[61046,61075],[56714,56762],[55937,55966],[59062,59111],[60772,60777],[62062,62091],[58105,58107],[55241,55248]], 66739)
// console.timeEnd('maximumWhiteTiles mega')

// var maximumWhiteTiles1 = function(tiles, carpetLen) {
//     let carpetArr = []
//     let maxCarpetCoverage = 0

//     for(let i = 0 i < tiles.length i++) {
//         for(let j = tiles[i][0]-1 j < tiles[i][1] j++) {
//             carpetArr[j] = 1
//         }
//     }
    
//     for(let i = 0 i < carpetLen i++) {
//         let carpetCoverage = 0

//         if(carpetArr[i]) {
//             carpetCoverage++
//         }

//         if(carpetCoverage > maxCarpetCoverage) {
//             maxCarpetCoverage = carpetCoverage
//         }
//     }

//     console.log('maxCarpetCoverage', maxCarpetCoverage)
// }


// console.time('maximumWhiteTiles1([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)')
// maximumWhiteTiles1([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)
// console.timeEnd('maximumWhiteTiles1([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)')

// console.time('maximumWhiteTiles1([[10,11],[1,1]], 2)')
// maximumWhiteTiles1([[10,11],[1,1]], 2)
// console.timeEnd('maximumWhiteTiles1([[10,11],[1,1]], 2)')

// console.time('maximumWhiteTiles1 mega')
// maximumWhiteTiles1([[60992,61033],[61214,61250],[57114,57134],[61897,61910],[58688,58731],[54961,54963],[61481,61524],[56463,56502],[61284,61297],[56022,56026],[56294,56298],[61140,61140],[56144,56170],[61454,61472],[55364,55381],[55596,55634],[55186,55225],[57981,58007],[62122,62153],[57052,57056],[57881,57907],[59419,59458],[57705,57749],[60553,60566],[58184,58188],[61653,61691],[57351,57364],[59790,59821],[58428,58457],[62027,62044],[57565,57607],[61931,61973],[55316,55339],[58778,58816],[57759,57771],[56981,57029],[60504,60523],[60349,60391],[56954,56964],[56859,56881],[59605,59653],[59561,59573],[60121,60137],[58866,58889],[55432,55466],[60896,60917],[56310,56353],[58641,58650],[59495,59495],[56662,56665],[60437,60487],[55544,55548],[58545,58572],[59162,59191],[57245,57269],[55037,55052],[59749,59749],[59377,59407],[56923,56927],[60708,60738],[60273,60315],[61337,61370],[58022,58039],[57656,57673],[57837,57872],[55132,55173],[61603,61616],[54788,54833],[60160,60184],[54921,54952],[58359,58377],[59981,59997],[59862,59907],[56074,56104],[58480,58489],[62189,62191],[62107,62115],[57955,57976],[57397,57435],[59198,59227],[58275,58318],[57546,57557],[58223,58249],[57316,57328],[54879,54885],[55285,55308],[57774,57791],[54990,54995],[61734,61782],[60813,60850],[55786,55834],[60223,60267],[60968,60983],[55076,55086],[59311,59335],[56532,56575],[57471,57499],[57174,57207],[61994,62001],[59505,59548],[61172,61188],[55495,55511],[55558,55574],[57069,57073],[60596,60635],[56394,56440],[61201,61208],[55647,55686],[59926,59975],[55729,55735],[61569,61587],[55978,55992],[60652,60676],[59676,59715],[58968,59014],[60047,60088],[56219,56268],[61849,61864],[58595,58604],[61791,61815],[58071,58094],[56032,56062],[55877,55922],[61414,61442],[59263,59292],[56781,56830],[56603,56618],[61089,61118],[58917,58967],[58531,58531],[58138,58183],[61046,61075],[56714,56762],[55937,55966],[59062,59111],[60772,60777],[62062,62091],[58105,58107],[55241,55248]], 66739)
// console.timeEnd('maximumWhiteTiles1 mega')

// var maximumWhiteTiles = function (tiles, carpetLen) {
//     let max = 0
//     tiles.forEach(data => {
//         max = Math.max(max, data[0], data[1])
//     })

//     if (carpetLen >= 434783959) {
//         let result = 0
//         tiles.forEach(data => {
//             result += (data[1] - data[0] + 1)
//         })
//         return result
//     }

//     let titleArray = new Array(max + 1).fill(0)

//     tiles.forEach(data => {
//         for (let i = data[0] i <= data[1] i++) {
//             titleArray[i] = 1
//         }
//     })

//     let tempMax = titleArray.slice(1, carpetLen + 1).reduce((a, b) => a + b)
//     let result = tempMax

//     for (let i = carpetLen + 1 i < titleArray.length i++) {
//         tempMax = tempMax - titleArray[i - carpetLen] + titleArray[i]
//         result = Math.max(result, tempMax)
//     }
    
//     return result
// }

// var maximumWhiteTiles3 = function(tiles, carpetLen) {
//     let max = 0
//     let carpetArr = []
//     let maxCarpetCoverage = 0
    
//     for(let i = 0 i < tiles.length i++) {
//         for(let j = tiles[i][0]-1 j < tiles[i][1] j++) {
//             carpetArr[j] = 1
//         }
//     }

//     max = carpetArr.slice(0, carpetLen-1).filter(Boolean).length
//     maxCarpetCoverage = max
    
//     for (let i = carpetLen i < carpetArr.length i++) {
//         // console.log('carpetArr[i]')
//         if(carpetArr[i]) {
//             max++
//         }
//         if(carpetArr[i - carpetLen - 1]) {
//             max--
//         }
//         maxCarpetCoverage = Math.max(max, maxCarpetCoverage)
//     }

//     return maxCarpetCoverage
// }

// console.time('maximumWhiteTiles3([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)')
// maximumWhiteTiles3([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)
// console.timeEnd('maximumWhiteTiles3([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)')

// var mySqrt = function(x) {
//     if(x < 2) {
//         return x
//     }
    
//     let start = 1
//     let end = x / 2
    
//     while(start <= end) {        
//         let mid = Math.floor((end+start) / 2)
//         let midSquared = mid*mid
                
//         console.log(`looking for ${x} | start is ${start} | end is ${end} | mid is ${mid} | midSquared is ${midSquared}`)
        
//         if(start+1 == end) {
//             return mid
//         }

//         // if(start === end) {
//         //     r
//         // }
        
//         if(midSquared === x) {
//             return mid
//         }
        
//         if(midSquared < x) {
//             start = mid
//         }
        
//         if(midSquared > x) {
//             end = mid
//         }
//     }

//     return -1
// }

var MyCircularQueue = function(k) {
    this.length = k
    this.queue = new Array(k).fill(null)
    this.front = -1
    this.rear = -1
}

MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isEmpty()) {
        this.rear++
    }

    if(this.isFull()) {
        return false
    } else {
        if(this.Rear()) {
            this.front = 0
        } else {
            this.front++
        }
        this.queue[this.front] = value
        return true
    }
}

MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        console.log('empty')
        return false
    } else {
        this.queue.splice(this.rear, 1, null)
        
        if(this.rear == this.front) {
            this.front = -1
            this.rear = -1
        } else {
            if(this.rear + 1 == this.length) {
                this.rear = 0
            } else {
                this.rear++
            }
        }
        
        return true
    }
}

MyCircularQueue.prototype.Front = function() {
    return this.front
}

MyCircularQueue.prototype.Rear = function() {
    return this.rear
}

MyCircularQueue.prototype.isEmpty = function() {
    return !this.queue.filter(e => e != null).length
}

MyCircularQueue.prototype.isFull = function() {
    return this.queue.filter(e => e != null).length == this.length
}

const queue = new MyCircularQueue(5)

console.log(queue.queue, `(front: ${queue.Front()})`, `(rear: ${queue.Rear()})`)

queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)
queue.enQueue(5)
queue.enQueue(5)
queue.enQueue(5)

console.log(queue.queue, `(front: ${queue.Front()})`, `(rear: ${queue.Rear()})`)

queue.deQueue()
queue.deQueue()

console.log(queue.queue, `(front: ${queue.Front()})`, `(rear: ${queue.Rear()})`)

queue.enQueue(6)

console.log(queue.queue, `(front: ${queue.Front()})`, `(rear: ${queue.Rear()})`)

queue.deQueue()
queue.deQueue()
queue.deQueue()
queue.deQueue()
// queue.deQueue()
// queue.deQueue()

console.log(queue.queue, `(front: ${queue.Front()})`, `(rear: ${queue.Rear()})`)