import React from 'react';
import DrinkSource from "../view/drinkSource.js";
import MenuView from '../view/menuView.js';

function MenuPresenter(props){
    //hooks called and returning current value
    const [promise, setPromise]=React.useState(null);
  const [searchQuery, setSearchQuery]=React.useState("");

  //change value promise 
  React.useEffect( function(){
        setPromise(DrinkSource.searchCocktail({}));
      }, []); // [] cleanup after an effect has been established

  //React.Framnet used to return multiple elements instead of div
  return(
    <React.Fragment>
     <MenuView
     onText={(text) => {
       setSearchQuery(text);
     }}
     onSearch={() => {
       setPromise(DrinkSource.searchCocktail({"query": searchQuery}));
     }}
     categoryChosen={category => console.log(category)}
     />
    </React.Fragment>

  )
}

export default MenuPresenter;