import React, { useState } from 'react';
import Section1 from './app/sections/Section1';
import Section2 from './app/sections/Section2';
import Section3 from './app/sections/Section3';
import Section4 from './app/sections/Section4';
import Section5 from './app/sections/Section5';
import Footer from './app/sections/Footer';
import GlobalStyle from './GlobalStyle';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <main>      
      <GlobalStyle modalShow={modalShow} />
      <Section1 />
      <Section2 modalShow={modalShow} setModalShow={setModalShow} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
}

export default App;
