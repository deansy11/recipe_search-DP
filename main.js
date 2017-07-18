const baseUrl = "https://crossorigin.me/http://www.recipepuppy.com/api/"

fetch(baseUrl)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data){
      console.log(response);
    });
    let rec_input = document.querySelector(".recipe_input");
    let userReq = baseUrl + "?q=" + rec_input;
    console.log(userReq);
  })
