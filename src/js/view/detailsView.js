import React from 'react';

function DetailsView(props){
    return(
        <div className="detailsView">
            {console.log("hej from detailsView")}
            {console.log(props.strDrink)}
            {console.log(props.drinkDetails.Drink[0].strDrink)}
          <h2>{props.strDrink}</h2>
        </div>
    )
}

export default DetailsView;
