const { readFile, writeFile } = require('fs')
console.log('start')
// readFile('./content/first.txt', 'UTF8', (err, res) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(res)
// })

readFile('./content/first.txt', 'UTF8', function firstfun(err, res) { // named callback function 
    if (err) {
        console.log(err)
        return
    }
    const first = res
    readFile('./content/second.txt', 'UTF8', (err, res) => { // anonymous callback function 
        if (err) {
            console.log(err)
            return
        }
        const second = res
        writeFile('./content/result-async.txt', `here is the result:  ${first}, ${second}`, (err, res) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })

})
console.log('starting next task')