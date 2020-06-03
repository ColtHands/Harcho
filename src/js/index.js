const fs = require('fs')

fs.readFile('public/inputs.txt', 'utf8', (err, data) => {
    // const abbey8 = function(){
    //     console.log(data)
    //     const inputs = data.replace("\r", '').split("\n").map(e => e.split(" ").map(Number)).map(e => {
    //         let res = 0
    //         let a = e[0]
    //         let b = e[1]
    //         let n = e[2]
    //         for (let i = 0; i <= n - 1; i++) {
    //             let eq = a + b * i
    //             res = res + eq
    //         }
    //         return res
    //     }).join(",").replace(/,/g, " ")
    //     console.log(inputs)
    // }();

    // const abbey28 = function() {
    //     const inputs = data.replace("\r", '').split("\n").map(e => e.split(" ").map(Number)).map(e => {
    //         const weight = e[0]
    //         const height = e[1]
    //         const BMI = Math.round((weight / ((height) ** 2) * 10)) / 10
    //         console.log("BMI", BMI)
    //         if(BMI < 18.5) {
    //             return 'under'
    //         } else if (BMI >= 18.5 && BMI < 25) {
    //             return 'normal'
    //         } else if (BMI >= 25 && BMI < 30) {
    //             return 'over'
    //         } else if (BMI >= 30) {
    //             return 'obese'
    //         }
    //         // return BMI
    //     }).join(',').replace(/,/g, " ")
    //     console.log(inputs)
    // }();

    // const abbey13 = function() {
    //     const inputs = data.replace("\r", '').split("\n").map(e => e.split(" ")).map(e => {
    //         return e.map(elem => elem.split('').map(Number).map((e,i) => e*(i+1)).reduce((a,b) => a+b, 0))
    //     }).join("").replace(/,/g, " ")
    //     console.log(inputs);
    // }();
    // const abbey13 = function() {
    //     const inputs = data.replace("\r", '').split("\n").map(e => e.split(" ").map(Number)).map(arr => {
    //         arr.map(elem => {})
    //         const minFromArray = Math.min.apply(Math, arr)
    //         const minIndex = arr.indexOf(minFromArray)
    //         arr.splice(minIndex, 1)

    //         const secondMinFromArray = Math.min.apply(Math, arr)

    //         return secondMinFromArray
    //     }).join(",").replace(/,/g, " ")
    //     console.log(inputs);
    // }();
    // const abbey16 = function() {
    //     const inputs = data.replace("\r", '').split("\n").map(e => e.split(" ").map(Number)).map(arr => {
    //         const avg = arr.
    //     }).join(",").replace(/,/g, " ")
    //     console.log(inputs);
    // }();
})

const DOF = function(focalLength = 55, aperture = 1.2) {
    const subjectDistance = 5000
    const circleOfConfusionFullFrame = 0.03 // 35mm
    const circleOfConfusionAPSC = 0.018 // 35mm
    const hyperFocalDistance = (focalLength * focalLength) / (aperture * circleOfConfusionAPSC)
    const nearFocusLimit = (hyperFocalDistance * subjectDistance) / (hyperFocalDistance + (subjectDistance - focalLength))
    const futherFocusLimit = (hyperFocalDistance * subjectDistance) / (hyperFocalDistance - (subjectDistance - focalLength))
    const depthOfField = Math.floor(futherFocusLimit - nearFocusLimit)
    console.log("depthOfField", depthOfField)
}

DOF(55, 1.2)
DOF(105, 1.8)
DOF(85, 1.5)