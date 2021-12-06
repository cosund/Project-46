import logo from './logo.svg';
import './App.css';
import Menu from '.view/menuView.js'
import ShowP from '.reactjs/showPresenter.js'

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
