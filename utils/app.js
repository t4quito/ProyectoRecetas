
const consumirApi = async () => {
    try{
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = await api.json()
        JSON.stringify(data)
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
consumirApi()