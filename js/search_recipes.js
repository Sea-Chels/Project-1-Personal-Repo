 //add html element id and classes here
var food = document.getElementById('food');
var fridge = document.getElementById('fridge');
var queryList = [];
var recipeBook = document.getElementById('card-container');
var cardModal = document.getElementById('modalBox');
   
//__________Chelby's Javascript for "lets get started button_________


var getStartedBtn = document.getElementById('getStarted');
var formContainer = document.getElementById('show-form');

getStartedBtn.addEventListener('click', function(){
    getStartedBtn.classList.add('hide');
    formContainer.classList.remove('hide');
})

//___________________________________________________________________________

//function to add data to fridge list as well as the queryList, then submits request.  to do: populate recipe cards with results
    
document.querySelector('#food').addEventListener('keypress', function (event) {
    if (event.key==='Enter') {
        event.preventDefault();
        console.log (food.value);
        var ingredient = document.createElement('li');
        ingredient.innerHTML = food.value;
        ingredient.id = food.value;
        fridge.append(ingredient);
        var removeButton = document.createElement('button');
        removeButton.innerHTML = '✖';
        removeButton.classList.add('remove-Btn')
        removeButton.addEventListener('click', function(event){
            event.preventDefault();
            var removeIngredient = event.target.parentElement.id;
            queryList.splice(removeIngredient, 1);
            document.getElementById(removeIngredient).remove();
            var request = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3').then(function(response){
            return(response.json())
            })
            .then(function(data){
                console.log(data);
                //document.querySelectorAll('.img').forEach(e => e.remove());
                //document.querySelectorAll('.title').forEach(e => e.remove());
                //document.querySelectorAll('.card').forEach(e => e.remove());
                document.getElementById('card-container').innerHTML = '';
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('div');
                    page.src = data[i].image;
                    page.id = data[i].id;
                    page.classList.add('img');
                    pageTitle.classList.add('title');
                    pageTitle.innerHTML = data[i].title;
                    recipeBook.append(page);
                    recipeBook.append(pageTitle);
                };
            });
        });
        ingredient.append(removeButton);
        queryList.push(food.value);
        console.log (queryList);
        food.value = " ";
        var request = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3').then(function(response){
            return(response.json())
            })
            .then(function(data){
                console.log(data);
                // document.querySelectorAll('.img').forEach(e => e.remove());
                // document.querySelectorAll('.title').forEach(e => e.remove());
                // document.querySelectorAll('.card').forEach(e => e.remove());
                document.getElementById('card-container').innerHTML = '';
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('div');
                    var section = document.createElement('section');
                    section.classList.add('card');
                    page.src = data[i].image;
                    page.id = data[i].id;
                    page.classList.add('img');
                    pageTitle.classList.add('title');
                    pageTitle.innerHTML = data[i].title;
                    console.log(page);
                    page.addEventListener('click', function(event){
                        event.preventDefault();
                        var recipeCard =  fetch('https://api.spoonacular.com/recipes/'+event.target.id+'/card?apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3')
                            .then(function(response){
                                return(response.json())
                            })
                            .then(function(data){
                                console.log(data.url);
                                var cardImage = document.createElement('img');
                                var modalContent = document.getElementById('modal-content');
                                modalContent.innerHTML = '';
                                cardImage.classList.add('cardImage');
                                cardImage.src = data.url;
                                console.log(cardImage);
                                var span = document.createElement('span');
                                span.classList.add('close');
                                span.innerHTML = '&times;';
                                span.addEventListener('click', function (event){
                                    event.preventDefault();
                                    cardModal.style.display = 'none';
                                });
                                
                                console.log(modalContent);
                                modalContent.appendChild(span);
                                modalContent.appendChild(cardImage);
                                cardModal.style.display = "block";
                                
                            });
                        

                    })
                    section.append(page);
                    section.append(pageTitle);
                    recipeBook.append(section);
                };
            });
        
    }});
    

        
    //api call syntax
/*fetch('https://api.spoonacular.com/recipes/complexSearch?query=rice&apiKey=604863b3b99545f18714e43387c170ea').then(function(response){
    return(response.json())
    })
    .then(function(data){
        console.log(data);
    });}*/
