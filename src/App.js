// import logo from './logo.svg';
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./slick.css"; 
import "./slick-theme.css";
import React from "react";
import Header from './components/Header';
// import SimpleSlider from './components/Slider-demo';
import Banner from './components/Banner';
import Services from './components/Services';
import Technologies from './components/Technologies';

function App() {
  const [fixehead, setFixhead] = React.useState();
  return (
    <div className="App" onScroll={() => setFixhead(!fixehead)}>
      <Header/>
      <Banner/>
      <Services/>
      <Technologies/>
      {/* <SimpleSlider/> */}
    </div>
  );
}

export default App;
