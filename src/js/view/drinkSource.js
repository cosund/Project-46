import React from 'react';

const  DrinkSource={   // JS object creation literal
  apiCall(params) {
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
 listCategories(params) {
   return DrinkSource.apiCall(
     'list.php?' + params + '=list'
   );
},
 filterIngredient(params) {
   if(!params) {
     console.error("No filter provided") 
     return;
   }
  return DrinkSource.apiCall(
    'filter.php?i=' +
    params
  );
},
filterChar(params) {
 if(!params) {
   console.error("No filter provided") 
   return;
 }
return DrinkSource.apiCall(
  'search.php?f=' +
  params
);
},
  // Api call, Input: drink-id, Output: drinkDetails...
  getDrinkDetails(id){
    return DrinkSource.apiCall(
      `lookup.php?i=`+id); }
};

export default DrinkSource;
