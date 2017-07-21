let baseUrl = "https://crossorigin.me/http://www.recipepuppy.com/api/";

const container = document.querySelector(".container");
let rec_input = document.querySelector(".recipe_input");
let button = document.querySelector("button");

button.addEventListener("click", function(e) {
  let userReq = baseUrl + "?q=" + rec_input.value;
  e.preventDefault();
  // baseUrl = `${baseUrl}/?q=${search.value}`;

  fetch(userReq)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
        }
        response.json().then(function(data){
          let templateContainer = "";
          data.results.forEach(function(items) {
            let imageSrc = "http://via.placeholder.com/350x150"
            if (items.thumbnail !== "") {
              imageSrc = items.thumbnail;
            }
            console.log(data);
              let template = `
              <ul>
                <li>
                  <img src="${imageSrc}" alt="image_not_shown">
                  <h1>${items.title}</h1>
                  <h3>Ingredients:</h3>
                  <p>${items.ingredients}</p>
                  <span><a href="${items.href}">See the Recipe</a></span>
                </li>
              </ul>
              `
              templateContainer += template;
            });
            container.innerHTML = templateContainer;
            rec_input.value = "";
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
