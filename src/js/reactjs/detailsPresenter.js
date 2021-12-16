function DetailsPresenter(props){
   const currentDrinkDetails = useModelProperty(props.model, "currentDrinkDetails");

  return promiseNoData(currentDish, currentDishDetails, currentDishError)
  || (<DetailsView
  drinkDetails = {currentDrinkDetails}
/>)
}
