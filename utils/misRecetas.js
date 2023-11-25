
const userModel = require('../model/user')
const containerRecetas = document.getElementById('recetas') 
const template = document.getElementById('template-recetas')

const data = async () => {
    const user = await userModel.findOne({username: 'Bryan'})
    return user
}

    const fragment = document.createDocumentFragment()
   
    user.recipe.forEach(item => {
        const nombreReceta = item.nombre
        const foto = item.foto
        const descripcion = item.descripcion
        template.querySelector('img').setAttribute('src', foto)
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    containerRecetas.appendChild(fragment)
    console.log('si')
