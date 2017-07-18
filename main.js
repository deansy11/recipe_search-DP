const baseUrl = "https://crossorigin.me/http://www.recipepuppy.com/api/"

fetch(baseUrl)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data){
      console.log(data);
    });
    let rec_input = document.querySelector(".recipe_input");
    let userReq = baseUrl + "?q=" + rec_input;
    console.log(userReq);
    let template = `
    <ul class="upper"></ul>
    <li>
    <img src="${data.thumbnail}" alt="image_not_shown">
    <a href=${data.href}><h4>${data.title}</h></a>
    </li>
    <ul class="upper"></ul>
    `
    container.innerHTML = template;
  })


//
// <section class="container">
//
//   <ul class="top_row">
//     <li class="upper"></li>
//     <li class="upper"></li>
//     <li class="upper"></li>
//     <li class="upper"></li>
//   </ul>
//   <ul class="bottom_row">
//     <li class="lower"></li>
//     <li class="lower"></li>
//     <li class="lower"></li>
//     <li class="lower"></li>
//   </ul>
// </section>`
