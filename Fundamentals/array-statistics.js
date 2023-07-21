const statistics = (arr) => {
    const sum = arr.reduce((sum, item) => sum += item, 0)
    return {
        sum,
        average: (sum/arr.length).toFixed(2),
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}

console.log(statistics([1, 2, 3, 4, 5]));