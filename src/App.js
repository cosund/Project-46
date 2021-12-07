import logo from './logo.svg';
import './App.css';
import MenuView from './js/view/menuView.js'
import ShowPresenter from './js/reactjs/showPresenter.js'
import FilterView from './js/view/filterView.js'

function App(props) {
  return (
    <div>
    <ShowPresenter>
      <MenuView model={props.model}  />
    </ShowPresenter>

    <ShowPresenter>
    <FilterView model={props.model} />
    </ShowPresenter>
    </div>
  );
}

export default App;
