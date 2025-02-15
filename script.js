function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}
const promises = [
    delayedPromise('first promise', 3000),
    delayedPromise('second promise', 1500),
    delayedPromise('third promise', 2000),
    delayedPromise('fourth promise', 500),
    delayedPromise('fifth promise', 4500)
]
async function allPromises() {
    try {
        const result = await Promise.all(promises)
        console.log('promises worked', result)
    } catch (error) {
        console.log('error', error)
    }
}
allPromises()





// function randomDelay(value) {
//     const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, delay);
//     });
// }

// const promises = [
//     randomDelay('first promise'),
//     randomDelay('second promise'),
//     randomDelay('third promise'),
//     randomDelay('fourth promise'),
//     randomDelay('fifth promise')
// ]

// async function racePromises() {
//     try {
//         const result = await Promise.race(promises)
//         console.log(result, 'won')
//     } catch (error) {
//         console.log('error', error)
//     }
// }
// racePromises()
