import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import HeroBlock from './components/Hero copy/Heroblock';
import Footer from './components/Footer/Footer';
import Diplom from './components/Diplomi/Diplom';
import Forma from './components/Forma/Forma';
import Reviews from './components/Otziv/Reviews';
import Services from './components/Services/Services';
import Kodex from './components/Company/Kodex'
import RunningText from './components/Servicerun/Servicerun';

import Map from './components/Map/Map'
import Achive from './components/Achive/Achive';
import Plus from './components/Plus/PLus';
import Team from './components/Team/Team';
import Work from './components/Work/Work';
import Headernew from './components/Header copy/Headercopy';
import Road from './components/Road/Road';
import Servicesfiz from './components/Services copy/Services';
// import SidebarExample from './components/Sidebar/Sidebar';

function App() {
  return (
    <>  
    <Headernew />

    {/* <SidebarExample /> */}
    {/* <Header /> */}
    <HeroBlock />
    <Achive />
    <RunningText />
    <Servicesfiz />
    {/* <Services /> */}
    <Plus /> 
    
    
    <Kodex /> 
    {/* <Team /> */}
    {/* <Road /> */}
    {/* <Work /> */}
    {/* <Forma /> */}
    <Diplom />
    <Reviews />
    <Map />
    <Footer />
    {/* <Hero /> */}
    </>
  );
}

export default App;
