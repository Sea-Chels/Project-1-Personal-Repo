//  //add html element id and classes here
//  var food = document.getElementById('food');
//  var fridge = document.getElementById('fridge');
//  var queryList = [];
 
//  //function to add data to fridge list as well as the queryList, then submits request.  to do: populate recipe cards with results
     
//  document.querySelector('#food').addEventListener('keypress', function (event) {
//      if (event.key==='Enter') {
//          event.preventDefault();
//          console.log (food.value);
//          var ingrediant = document.createElement('li');
//          ingrediant.innerHTML = food.value;
//          fridge.append(ingrediant);
//          queryList.push(food.value);
//          console.log (queryList);
//          food.value = " ";
//          var request = fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + queryList + '&apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3').then(function(response){
//          return(response.json())
//          })
//          .then(function(data){
//              console.log(data);
//          });
//      }});
     
//      //api call syntax
 
 
 
 
//      /*fetch('https://api.spoonacular.com/recipes/complexSearch?query=rice&apiKey=604863b3b99545f18714e43387c170ea').then(function(response){
//          return(response.json())
//      })
//      .then(function(data){
//          console.log(data);
//      });*/
 