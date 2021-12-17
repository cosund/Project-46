import React from 'react';
import useModelProperty from './useModelProperty';
import usePromise from "./usePromise";
import promiseNoData from "../view/promiseNoData";
import DetailsView from "../view/detailsView";
import DrinkSource from '../view/drinkSource';

function DetailsPresenter(props){
  const currentDrinkDetails = useModelProperty(props.model, "currentDrinkDetails");
  console.log("currDriDet",currentDrinkDetails);
   
  const [promise, setPromise]=React.useState(null);
  React.useEffect(function(){
      setPromise(DrinkSource.getDrinkDetails("11009"));
    }, []);
  const [data, error] = usePromise(promise);
    console.log("data in details",data);
  return(
    promiseNoData(promise,data,error)
    || (<DetailsView
          drinkDetails = {data}
        />))
}

export default DetailsPresenter;
