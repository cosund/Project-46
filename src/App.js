import logo from './logo.svg';
import './style.css'
import './App.css';
import MenuView from './js/view/menuView.js'
import ShowPresenter from './js/reactjs/showPresenter.js'

function App(props) {
  return (
    <div>
    <ShowPresenter>
      <MenuView model={props.model}  />
    </ShowPresenter>
    </div>
  );
}

export default App;
