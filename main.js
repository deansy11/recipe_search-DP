const baseUrl = "https://crossorigin.me/http://www.recipepuppy.com/api/";

const container = document.querySelector(".container");
let rec_input = document.querySelector(".recipe_input");

document.querySelector("button").addEventListener("click", function() {
  console.log(rec_input.value);

let userReq = baseUrl + "?q=" + rec_input.value;

fetch(userReq)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
      }
      response.json().then(function(data){
        console.log(data);

            let innerData = data.results[0];
            let template = `
            <ul class="upper"></ul>
              <li>
                <img src="${innerData.thumbnail}" alt="image_not_shown">
                <a href=${innerData.href}><h4>${innerData.title}</h></a>
                <p>${innerData.ingredients}</p>
              </li>
            <ul class="upper"></ul>
            `
            container.innerHTML = template;
      });
    })
  });

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
