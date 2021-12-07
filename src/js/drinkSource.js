import React from 'react';
import './apiConfig.js';

const  DrinkSource={   // JS object creation literal
  apiCall(params) {
     console.log(BASE_URL)
     console.log(params);
     return fetch(BASE_URL + params).then((res) => {
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
};filterIngredient(params) {
   return DrinkSource.apiCall(
     'filter.php?i=' +
     params
   );
},

  getDishDetails(id){
    return DrinkSource.apiCall(
      `recipes/${id}/information`); }
