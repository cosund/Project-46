import logo from './logo.svg';
import './App.css';
import '.view/menuView'
import '.reactjs/showPresenter'

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
