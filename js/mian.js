// async function getRecipe(recipe) {
//   var response = await fetch(
//     `https://forkify-api.herokuapp.com/api/search?q=${recipe}`
//   );
//   var finalData = await response.json();
//   allRecipes = finalData.recipes;
//   displayData();
//   console.log(allRecipes);
// }

// getRecipe("pasta");

// function displayData() {
//   var shank = "";
//   for (var i = 0; i < allRecipes.length; i++) {
//     shank += `
//       <div class="col-md-4">
//         <div class="card">
//           <img class="card-img-top" src="${allRecipes[i].image_url}" alt="Title" />
//           <div class="card-body">
//             <tr>
//               <td>${allRecipes[i].recipe_id}</td>
//               <td>rank</td>
//             </tr>
//             <h4 class="card-title">Title</h4>
//             <p class="card-text">Text</p>
//           </div>
//         </div>
//       </div>
//     `;
//   }
//   document.getElementById("rowData").innerHTML = shank;
// }


var search=document.querySelector('.search');


let allRecipes=[];
async function getRecipes(recipe){
   var response = await fetch(
     `https://forkify-api.herokuapp.com/api/search?q=${recipe}`
   );
   var finalData= await response.json();
      allRecipes=finalData.recipes
   console.log(allRecipes);
   displayMenu();
   

}
async function searching(){
  search.addEventListener('input',function(e){
    var searchvalue=e.target.value;
    console.log(searchvalue);
    getRecipes(searchvalue);
})
}
searching();

getRecipes('pasta');




function displayMenu() {
  let shank = ``;
  for (var i = 0; i < allRecipes.length; i++) {
    shank += `
      <div class='col-md-4'>
        <div class="card">
          <img class="card-img-top" src="${allRecipes[i].image_url}" alt="">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <td>id: ${allRecipes[i].recipe_id}</td>
              </div>
              <div class="col-6">
                <td>score: ${allRecipes[i].social_rank}</td>
              </div>
            </div>
            <h4 class="card-title">${allRecipes[i].title}</h4>
            <p class="card-text">${allRecipes[i].publisher}</p>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("rowData").innerHTML = shank;
}