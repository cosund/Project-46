import React from 'react';

const  DrinkSource={   // JS object creation literal
  apiCall(params) {
     console.log("https://www.thecocktaildb.com/api/json/v1/1/")
     console.log(params);
     return fetch("https://www.thecocktaildb.com/api/json/v1/1/" + params).then((res) => {
       if(res.status !== 200) throw res.statusText;
       return res.json()
    });
  },
  searchCocktail(params) {
   return DrinkSource.apiCall(
     'search.php?s=' +
     params
   );
 },
  searchIngredient(params) {
     return DrinkSource.apiCall(
       'search.php?i=' +
       params
     );
  },
  filterIngredient(params) {
   return DrinkSource.apiCall(
     'filter.php?i=' +
     params
   );
},

  getDishDetails(id){
    return DrinkSource.apiCall(
      `recipes/${id}/information`); }
};
