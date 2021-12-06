import logo from './logo.svg';
import './App.css';
import MenuView from '.view/menuView.js'
import ShowPresenter from '.reactjs/showPresenter.js'

function App(props) {
  return (
    <div>
    <ShowPresenter>
      <menuView model={props.model}  />
    </ShowPresenter>
    </div>
  );
}

export default App;
