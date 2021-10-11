const martingaleBinaryOptions = () => {
    const winPercentage = 0.86
    let staringMoney = 10000
    let startingBet = 5
    for(let i = 1; i <= 1000; i++) {
        console.log(`${i}: staringMoney: ${staringMoney} | startingBet: ${startingBet}`)
        const coinFlip = Math.random() < 0.5
        staringMoney = staringMoney - startingBet
        if(startingBet > staringMoney) {
            console.log('LOST ALL')
            break;
        }

        if(coinFlip) {
            const winMoney = startingBet + startingBet * winPercentage
            staringMoney = staringMoney + winMoney
            startingBet = 10
            console.log(`Won: ${winMoney}`)
        } else {
            console.log(`Lost: ${startingBet}`)
            startingBet = startingBet * 2
        }
    }
    console.log('staringMoney', staringMoney)
}

martingaleBinaryOptions()