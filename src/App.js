import logo from './logo.svg';
import './App.css';
import MenuView from './js/view/menuView.js';
import ShowPresenter from './js/reactjs/showPresenter.js';
import FilterView from './js/view/filterView.js';
import './js/view/drinkSource.js';
import './js/drinkModel.js';
import './js/apiConfig.js';
import './js/view/style.css';

function App(props) {
  return (
    <div className="flexparent">
    <div className="menubar"><MenuView categoryChosen={category => console.log(category)}/></div>
    <div className="mainContent">

    <ShowPresenter hash="#filter">
    <FilterView model={props.model} />
    </ShowPresenter>
    </div>
  );
}

function defaultRoute(){
  let knownRoutes = ["#search", "#myDrink", "#details"];
    if(!knownRoutes.includes(window.location.hash)) {
      window.location.hash="#search";
  }
}
defaultRoute(); // when the application loads, set the default route!

window.addEventListener("hashchange", defaultRoute);

export default App;
