const consumirApi = async () => {
  try {
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await api.json();
    JSON.stringify(data);
    const DataArray = Object.values(data);
    pintarRecetas(DataArray);
  } catch (err) {
    console.log(err);
  }
};

const pintarRecetas = (data) => {
  const productos = document.getElementById("productos");
  const templateProducto = document.getElementById("template-recetas").content
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    templateProducto.querySelector(`h4`).textContent = item.strCategory
   
    const clone = templateProducto.cloneNode(true)
    fragment.appendChild(clone)
    console.log(clone)
  });
  productos.appendChild(fragment)
};

consumirApi();
