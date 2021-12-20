import DrinkSource from "./view/drinkSource.js";

class DrinkModel{
  constructor(drinks=[], currentDrink = null, currentDrinkDetails = null, currentFilter = null){
      this.observers = [];
      this.drinks = drinks;
      this.currentDrink = currentDrink;
      this.currentDrinkDetails = currentDrinkDetails;
      this.currentFilter = currentFilter;
    }

    addObserver(callback){
      this.observers = [...this.observers, callback];
    }
    removeObserver(callback){
      this.observers = this.observers.filter((e) => e !== callback);
    }
    notifyObservers(){
      this.observers.forEach(args => {
        setTimeout(() =>  {
          try {
            args();
          } catch(error){
            console.log(error);
          }
        }, 0)
      })
    }
    addToMenu(drink){
      const found = this.drinks.filter((e) => e === drink)
      if(found !== drink){
        this.drinks = [...this.drinks, drink]
        this.notifyObservers();
    }
    };
    removeFromMenu(drinkData){
      const found = this.drinks.filter(e => drinkData === e.drinks[0].idDrink)
      if(found[0].drinks[0].idDrink === drinkData){
      this.drinks = this.drinks.filter(drinkID => drinkData !== drinkID.drinks[0].idDrink)
      this.notifyObservers()
    }
    };
    setDrinks(drinks){
      this.drinks= [...drinks];
      this.notifyObservers()
    }
    setCurrentDrink(id){
      if(this.currentDrink === id){
        return;
      }
      this.currentDrink = id;
      console.log("in setCurrentDrink",id);
      this.currentDrinkDetails = null;
      this.currentDrinkError = null;
      this.notifyObservers();
      if(this.currentDrink) {
        DrinkSource.getDrinkDetails(this.currentDrink)
        .then((results) => {
          if (this.currentDrink === id) {
            this.currentDrinkDetails = results;
            this.notifyObservers();
          }
        })
        .catch(err => {
          if (this.currentDrink === id) {
            this.currentDrinkError = err;
            this.notifyObservers();
          }
        })
      }
    }
}

export default DrinkModel;
