
console.log (document.body)

var randomFact = document.querySelector('#random-facts')
var apiUrl = "https://my-bao-server.herokuapp.com/api/breadpuns"

randomFact.addEventListener('click', function (event) {
    var request = fetch(apiUrl).then(function(response){
    return(response.json())
    }).then(function(data){
        console.log(data);
        randomFact.innerHTML = data;
        });
    });