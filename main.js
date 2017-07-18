fetch("http://www.recipepuppy.com/api/");

  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data){

    });
  })
