import React from 'react';
import ReactGA from 'react-ga';
import Section1 from './app/sections/Section1';
import Section2 from './app/sections/Section2';
import Section3 from './app/sections/Section3';
import Section4 from './app/sections/Section4';
import Section5 from './app/sections/Section5';
import Footer from './app/sections/Footer';

ReactGA.initialize('G-QJHP22L4RH', {
  // debug: true,
  // gaOptions: {
  //   userId: 123
  // }
});

ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
}

export default App;
