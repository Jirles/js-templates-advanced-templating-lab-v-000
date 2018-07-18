function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(){
<<<<<<< HEAD
    return new Handlebars.SafeString("<li name='recipe-ingredients' >" + this.name + "</li>");
=======
    return new Handlebars.SafeString("<li name='ingredients' >" + this.name + "</li>");
>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

<<<<<<< HEAD
  renderRecipeForm();
=======
  renderNewRecipeForm();
>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})

<<<<<<< HEAD
function renderRecipeForm(recipeData = false){
  if (recipeData === false)
      recipeData = {
      'submitFunction': 'createRecipe();',
      'formId': 'recipe-form',
=======
function renderNewRecipeForm(recipeData = false){
  if (recipeData === false)
      recipeData = {
      'submitFunction': 'createRecipe();',
>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70
      'name': '',
      'description': '',
      'ingredients': [
        {'name': ''},
        {'name': ''},
        {'name': ''},
        {'name': ''},
        {'name': ''}
      ]
    }
  const form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
<<<<<<< HEAD
  const result = form(recipeData);
  document.getElementById('main').innerHTML += result;
};

function generateRecipeJSONFromForm(edit = false){
  const form = setCorrectForm(edit);
  const recipeName = form.querySelector('#name').value;
  const recipeDescription = form.querySelector('#description').value;
  const ingredientNodes = form.querySelectorAll('[name="ingredients"]')
=======
  const result = form(formData);
  document.getElementById('main').innerHTML += result;
};

function generateNewRecipeJSON(){
  const recipeName = document.getElementById('name').value;
  const recipeDescription = document.getElementById('description').value;
  const ingredientNodes = document.getElementsByName('ingredients')
>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70
  const recipeIngredients = [];
  for(let i = 0; i < ingredientNodes.length; i++){
    let name = ingredientNodes[i].value
    if (name !== ''){
      recipeIngredients.push({'name': name});
    }
  }
  return {'name': recipeName, 'description': recipeDescription, 'ingredients': recipeIngredients };
};

<<<<<<< HEAD
function setCorrectForm(edit){
  if (edit === false){
    return document.getElementById('recipe-form');
  } else {
    return document.getElementById('edit-recipe-form');
  };
};

function createRecipe(){
  // grab values
  const recipe = generateRecipeJSONFromForm();
=======
function createRecipe(){
  // grab values
  const recipe = generateNewRecipeJSON();
>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70

  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  const result =  template(recipe);

  document.getElementById('main').innerHTML += result;
};

<<<<<<< HEAD
function generateEditFormJSON(){
  const name = document.getElementById('recipe-name').innerText;
  const description = document.getElementById('recipe-description').innerText;
  const ingredientNodes = document.getElementsByName('li[name="recipe-ingredients"]');
=======
function generateEditRecipeJSON(){
  const recipe = document.getElementById('recipe-card');
  const name = recipe[0].querySelector('#recipe-name').innerText;
  const description = recipe[0].querySelector('#recipe-description').innerText
  const ingredientNodes = recipe[0].querySelectorAll('li[name="ingredients"]')
>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70
  const ingredients = [];
  for(let i = 0; i < ingredientNodes.length; i++){
    ingredients.push({'name': ingredientNodes[i].innerText});
  }

<<<<<<< HEAD
  return {'submitFunction': 'updateRecipe();', 'formId': 'edit-recipe-form', 'name': name, 'description': description, 'ingredients': ingredients}
};
//passed in recipe before
function displayEditForm() {
  const formData = generateEditFormJSON();
  const form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  const result = form(formData);
  // add to bottom of recipe
  document.getElementById('main').innerHTML += result;
};

function updateRecipe(){
  const recipe = generateRecipeJSONFromForm(true);;
  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  const result =  template(recipe);
  //remove old recipe, form - but tests don't allow for this.
  //document.getElementById('edit-recipe-form').remove();
  //document.getElementById('recipe-card').remove();
  //add new, update recipe
=======
  return {'submitFunction': 'updateRecipe();', 'name': name, 'description': description, 'ingredients': ingredients}
};

function displayEditForm() {
  const formData = generateEditRecipeJSON();
  const form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  const result = form(formData);
  // add to bottom of recipe
  document.getElementById('recipe-card').appendChild(result)
};

function updateRecipe(){
  const recipe = generateEditRecipeJSON;
  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  const result =  template(recipe);

>>>>>>> e60993f0ac9ce432f0e73decdfe8839a4187ff70
  document.getElementById('main').innerHTML += result;
};
