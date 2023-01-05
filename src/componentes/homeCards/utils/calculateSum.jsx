export const calculateSum = (dataCards) => {
    const arrOfNumbers = dataCards.map(x => Number(x.price * x.quantity))
    const sum = arrOfNumbers.reduce((p, acc) => p + acc, 0)
    return sum
}