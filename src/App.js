import './App.css';
import MenuView from './js/view/menuView.js';
import SearchPresenter from './js/reactjs/searchPresenter';
import ShowPresenter from './js/reactjs/showPresenter.js';
import FilterPresenter from './js/reactjs/filterPresenter.js';
import MyDrinkView from './js/view/myDrinkView';
import './js/view/drinkSource.js';
import './js/view/style.css';

function App(props){
   return  (
        <div className="flexparent">
          <div className="menubar"><MenuView categoryChosen={category => console.log(category)}/></div>
          <div className="mainContent">
            <ShowPresenter hash="#filter">
              <FilterPresenter filterResults={props.model}/>
            </ShowPresenter>

            <ShowPresenter hash="#myDrink">
              <MyDrinkView model={props.model}/>
            </ShowPresenter>

            <ShowPresenter hash="#search">
              <SearchPresenter model={props.model}/>
            </ShowPresenter>
          </div>
         </div>
    );
}

function defaultRoute(){
  const knownRoutes = ["#search", "#myDrink", "#details", "#filter"]
    if(!knownRoutes.includes(window.location.hash)) {
      window.location.hash="#search";
  }
}
defaultRoute(); // when the application loads, set the default route!

window.addEventListener("hashchange", defaultRoute);

export default App;
