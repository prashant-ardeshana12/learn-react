// import logo from './logo.svg';
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./slick.css"; 
import "./slick-theme.css";

import Header from './components/Header';
import SimpleSlider from './components/Slider-demo';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      {/* <SimpleSlider/> */}
    </div>
  );
}

export default App;
