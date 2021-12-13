import React from 'react';
import DrinkSource from '../view/drinkSource';
import promiseNoData from '../view/promiseNoData';
import usePromise from './usePromise';
import SearchResultsView from '../view/searchView.js';

function SearchPresenter(props){
    //hooks called and returning current value
    const [promise, setPromise]=React.useState(null);
  
    //change value promise 
    React.useEffect( function(){
          setPromise(DrinkSource.searchCocktail({}));
        }, []); // [] cleanup after an effect has been established
    const [data, error] = usePromise(promise);
  
    //React.Framnet used to return multiple elements instead of div
    return(
      <React.Fragment>
       {promiseNoData(promise, data, error) ||
           <SearchResultsView searchResults={data} drinkChosen={(id) => props.model.setCurrentDrink(id)}/>}
      </React.Fragment>
  
    )
  }

  export default SearchPresenter;