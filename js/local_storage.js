var ingredients=[];
var recipe={};

document.getElementById("saved").innerText="Last saved: "+localStorage.getItem("ingredients");

document.getElementById("addIngredient").onclick=()=> {
    ingredients.push(document.getElementById("ingredient.value").value);
  document.getElementById("ingredients").innerText="Ingredients: "+ingredients;
}

document.getElementById("save").onclick=()=> {
    recipe["ingredients"]=ingredients;
    localStorage.setItem("ingredients", JSON.stringify(recipe));
  document.getElementById("saved").innerText="Saved: "+localStorage.getItem("ingredients");
}