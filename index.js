
module.exports.generateRangeBelow = generateRangeBelow;



function generateRangeBelow(N){ // generate range from 1 to N
    if(N<=1){
        return 0
    }
    if(N % 1 !== 0){ // N must be integer
        return 0
    }
    return Array.apply(null, {length: N}).map(Number.call, Number)
}



console.log(generateRangeBelow(40));