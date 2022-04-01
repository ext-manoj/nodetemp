const os = require('os')
// current user info
const user = os.userInfo()
console.log(user)

// method sysytem up time in sec
console.log(`sys uptime is ${os.uptime}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

// File System