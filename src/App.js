
import './App.css';
import Content from './component/content';
import Header from './component/Header/Header';
import MainDetails from "./component/headerDetails";

function App() {
  return (
    <div className="App">
      <Header/>
     <MainDetails/>
    <Content/>
    </div>
  );
}

export default App;
