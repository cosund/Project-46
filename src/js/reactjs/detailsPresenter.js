import useModelProperty from "./useModelProperty";
import promiseNoData from "../view/promiseNoData";
import DetailsView from "../view/detailsView";

function DetailsPresenter(props){
   const currentDrinkDetails = useModelProperty(props.model, "currentDrinkDetails");

  return promiseNoData(currentDrinkDetails)
  || (<DetailsView
  drinkDetails = {currentDrinkDetails}
/>)
}

export default DetailsPresenter;