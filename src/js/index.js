// const log = (...args) => { console.log(JSON.stringify(args)) }

// const martingaleBinaryOptions = () => {
//     const winPercentage = 0.86
//     let staringMoney = 10000
//     let startingBet = 5
//     for(let i = 1; i <= 1000; i++) {
//         console.log(`${i}: staringMoney: ${staringMoney} | startingBet: ${startingBet}`)
//         const coinFlip = Math.random() < 0.5
//         staringMoney = staringMoney - startingBet
//         if(startingBet > staringMoney) {
//             console.log('LOST ALL')
//             break;
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

var searchInsert = function(nums, target, start = 0, end = nums.length-1) {
    let mid = Math.round((end - start) / 2) + start

    console.log(`searchInsert with ${nums}, looking for ${target}`, '|', 'start', start, '|', 'end', end, '|', `nums[${mid}]`, nums, 'is', nums[mid])
    
    if(target === nums[mid]) {
        return mid
    }

    if(start > nums.length-1) {
        return nums.length
    }

    if(start > end) {
        return start
    }

    if(start === end) {
        if(target > nums[start]) {
            return start + 1
        } else {
            return start
        }
    }
    
    if(target > nums[mid]) {
        return searchInsert(nums, target, mid+1, end)
    }

    if(target < nums[mid]) {
        return searchInsert(nums, target, start, mid-1)
    }
}

let valueToInsert = searchInsert([1,2,4,6,7], 3)

// 2

console.log('valueToInsert', valueToInsert)