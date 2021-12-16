import firebase from "firebase/compat/app"; 
import 'firebase/compat/database';


const REF= "drinkModel"; //  NN is your TW2_TW3 group number
function PersistModel(model){
    let loadingFromFirebase=false;  // stops inf loops, (persistModel can trigger observers)
    model.addObserver(function(){
      if(loadingFromFirebase){return;};
         	firebase.database().ref(REF).set({  // Save to the database
            drinks: model.drinks,
            currentDrink: model.currentDrink
            });
    });
    // Load from the database.
    firebase.database().ref(REF).on("value", function(data){
      loadingFromFirebase= true; //enables loading data from database.
	     try{ //tries the whole try-block,before "commiting"
         if(data.val()){
           model.setDrinks(data.val().drinks || []);
           model.setCurrentDrink(data.val().currentDrink || null);
         }
       } catch(e) { //catches error in try-block
         console.trace()
         console.log(e);
       } finally {
         loadingFromFirebase= false; //disable loading data from the database again.
       }
    });
}

export {PersistModel, REF};