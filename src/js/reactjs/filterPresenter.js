import React from 'react';
import FilterView from '../view/filterView.js';
import MenuView from '../view/menuView.js';
import '../view/drinkSource.js';
import useModelProperty from './useModelProperty.js';
import usePromise from './usePromise.js';
import '../view/promiseNoData.js';

function FilterPresenter(props){
    //hooks called and returning current value
    const [promise, setPromise]=React.useState(null);
    //const [filterQuery, setFilterQuery] = React.useState(null);
  
    //change value promise 
    React.useEffect( function(){
          setPromise(DrinkSource.filterIngredient(""));
        }, []); // [] cleanup after an effect has been established
    const [data, error] = usePromise(promise);
  
    //React.Framnet used to return multiple elements instead of div
    return(
      <React.Fragment>
       <MenuView className="menubar" options={["vodka","tequila", "rum", "gin", "triple sec"]} 
       categoryChosen={category => {
          //setFilterQuery(category);  //For some reasen bugs out the below
          setPromise(DrinkSource.filterIngredient(category));
       }}
       />
       {promiseNoData(promise, data, error) ||
           <FilterView filterResults={data} />}
      </React.Fragment>
    )
  }

  export default FilterPresenter;