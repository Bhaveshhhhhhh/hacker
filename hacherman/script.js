let a = [
    "Initializing Hack Tool..../....../.",
    "Connecting To server..../....../.",
    "Connected To Server Successfully..../....../.",
    "Connecting To Youtube..../....../.",
    "Connected To Youtube Successfully..../....../.",
    `User Name is Found "Right Master"..../....../.`,
    "Retrieving Password..../....../.",
    "Operation Faild..../....../.",
    "Again Trying to Retrieving Password..../....../.",
    "Password Found..../....../.",
    "You Got Hacked :')"
]

const sleep = async (seconds) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },seconds *1000)
    })
}

const showHack = async (messages) =>{
    await sleep(2)
    text.innerHTML = text.innerHTML + messages + "<br>"
}

(
    async ()=>{
        for(let i=0; i<a.length;i++){
            await showHack(a[i])
        }
    }
)()