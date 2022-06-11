import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import RoadMap from './components/sections/RoadMap';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import ShowCase from "./components/sections/ShowCase";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles/>
        <ThemeProvider theme={light}>
         <Navigation />
         <Home/>
         <About/>
         <RoadMap/>
         <ShowCase/>
         <Team/>
         <Faq/>
         <Footer/>
         <ScrollToTop/>
        </ThemeProvider>
    </>
  );
}

export default App;
