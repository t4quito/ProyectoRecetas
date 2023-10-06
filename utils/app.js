
const consumirApi = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await api.json()
    getId(data)
}
