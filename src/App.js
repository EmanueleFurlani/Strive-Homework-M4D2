//import logo from './logo.svg';
import './App.css';
import MyFooter from "./components/MyFooter"
import MyNav from "./components/MyNav"
import MyJumbotron from "./components/MyJumbotron"
import LatestReleases from './components/LatestReleases';

function App() {
  return (
    <div className="App">
      <MyNav title="Stribook" color="dark"/>
      <MyJumbotron title="Stribook"/>
      <LatestReleases/>
      <MyFooter/>
    </div>
  );
}

export default App;
