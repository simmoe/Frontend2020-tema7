export const generateRandomNumber = (min, max) => {
    min = Math.ceil(min) + 1 
    max = Math.floor(max) - 1

    const random = Math.floor( Math.random() * (max - min) ) + min

    return random
}