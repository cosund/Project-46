import DrinkSource from "./view/drinkSource";

class DrinkModel{
  constructor(drinks=[], currentDrink=null, currentFilter = null){
      this.observers = [];
      this.drinks = drinks;
      this.currentDrink = currentDrink;
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
      const found = this.drinks.filter(e => drinkData === e)
      if(found[0] === drinkData){
      this.drinks = this.drinks.filter(drinkID => drinkID.id !== drinkData.id)
      this.notifyObservers()
    }
    };
    setDishes(drinks){
      this.drinks= [...drinks];
      this.notifyObservers()
    }
    setCurrentDrink(id){
      if(this.currentDrink === id){
        return
      }
      this.currentDrink = id;
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
