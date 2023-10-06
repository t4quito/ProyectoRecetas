
const consumirApi = async () => {
    try{
        const api = await fetch('api.json')
        const data = await api.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
consumirApi()