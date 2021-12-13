class DrinkModel{
  constructor(drinks=[], currentDrink=null){
      this.observers = [];
      this.drinks = drinks;
      this.currentDish = currentDrink;
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
      const found = this.drinks.filter((e) => e === dish)
      if(found !== dish){
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
    }
}
