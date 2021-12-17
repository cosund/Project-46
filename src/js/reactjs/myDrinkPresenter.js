import React from 'react';
import MyDrinkView from "../view/myDrinkView";

function MyDrinkPresenter(props){
    const [drink, setDrink] = React.useState(props.model.drinks);

    React.useEffect( function(){
          function obs(){
              setDrink(props.model.drinks);
            }
              props.model.addObserver(obs);
              return function(){ props.model.removeObserver(obs);}
          }, []);
    return (
        <MyDrinkView
            drinks = {[...drink]}
            removeDrink = {(id) => props.model.removeFromMenu(id)}
            drinkChoice = {(id) => props.model.setCurrentDrink(id)}
        />
    );
}

export default MyDrinkPresenter;