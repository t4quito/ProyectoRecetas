

const searchBtn = document.getElementById('btn-buscar')
const result = document.getElementById('result')
const buscarComida = document.getElementById('txt-buscar')
searchBtn.addEventListener('click', () => {
 
  buscarComida.value
  if(buscarComida.length == 0){
    result.innerHTML = 
    `<h3>No puede estar vacio el campo</h3>
    `
  }else{

        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + buscarComida.value)
        .then((response => response.json()))
        .then((data) => {
          let mymeal = data.meals[0]
          let count = 1
          let ingredients = []
          for(let i in mymeal){
            let ingredient = ''
            let measure = ''
            if(i.startsWith('strIngredient') && mymeal[i]){
              ingredient = mymeal[i]
              measure = mymeal[`strMeasure` + count]
              count += 1
              ingredients.push(`${measure} ${ingredient}`)
            }
          }
          result.innerHTML = 
          `<img src=${mymeal.strMealThumb}>
          <div class ="details">
            <h2>${mymeal.strMeal}</h2>
            <h4>${mymeal.strArea}</h4>
          </div>
          <div id="ingredient-con"></div>
          <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${mymeal.strInstructions}</pre>
          </div>
          <button id="btn-guardar">Guardar receta</button>
          <button id="show-recipe">Ver ingredientes</button>
          `

          const botonGuardar = document.getElementById(`btn-guardar`)
          
          botonGuardar.addEventListener("click",() => {
            console.log(mymeal.strMeal)
            console.log(mymeal.strInstructions)
            console.log(mymeal.strMealThumb)
          })
        
          let ingredientCon = document.getElementById('ingredient-con')
          let parent = document.createElement('ul')
          let recipe = document.getElementById('recipe')
          let hideRecipe = document.getElementById('hide-recipe')
          let showRecipe = document.getElementById('show-recipe')
          
          ingredients.forEach((i) => {
            let child = document.createElement("li")
            child.innerText = i
            parent.appendChild(child)
            ingredientCon.appendChild(parent)
          })
      
          hideRecipe.addEventListener("click", () => {
            recipe.style.display = "none"
          })
      
          showRecipe.addEventListener("click", () => {
            recipe.style.display = "block"
          })
        })
   
    };
  }
)
