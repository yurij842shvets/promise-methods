// function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, delay)
//     })
// }
// const promises = [
//     delayedPromise('first promise', 3000),
//     delayedPromise('second promise', 1500),
//     delayedPromise('third promise', 2000),
//     delayedPromise('fourth promise', 500),
//     delayedPromise('fifth promise', 4500)
// ]

// Promise.all(promises)
//     .then((result) => console.log('promises worked', result))
//     .catch((error) => console.log('error', error))






function randomDelay(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

const promises = [
    randomDelay('first promise', 3000),
    randomDelay('second promise', 1500),
    randomDelay('third promise', 2000),
    randomDelay('fourth promise', 500),
    randomDelay('fifth promise', 4500)
]

Promise.race(promises)
    .then((result) => console.log(result, 'won'))
    .catch((error) => console.log('error', error))