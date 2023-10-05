fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res => res.json())
.then(response => console.log(response))