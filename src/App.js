import React, { useContext } from 'react';
import './App.scss';
import SectionLandingScreen from './components/Organism/SectionLandingScreen/SectionLandingScreen.component';
import SectionProjects from './components/Organism/SectionProjects/SectionProjects.component';
import SectionGroupEGP from './components/Organism/SectionGroupEGP/SectionGroupEGP.component.jsx';
import Footer from './components/Organism/Footer/Footer.componenet.jsx';
import { Helmet } from 'react-helmet';
import { AppContext } from './contexts/AppContext';
import { documentHeight, wathcResize } from './utils.js';

function App() {
  const { themeColorObj } = useContext(AppContext);
  const themeColorDark = themeColorObj[0];

  documentHeight();
  wathcResize();

  return (
    <div className="App" data-theme={themeColorDark ? 'dark' : 'light'}>
      <Helmet>
        <title>IMNOT</title>
        <meta
          name="description"
          content="IMNOT designs user interfaces and builds web applications, with passion, simplicity and ambition."
        />
      </Helmet>
      <SectionLandingScreen />
      <SectionProjects />
      <SectionGroupEGP />
      <Footer />
    </div>
  );
}

export default App;
