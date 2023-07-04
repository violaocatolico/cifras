import React, { useState } from 'react';
import Section1 from './app/sections/Section1';
import Section3 from './app/sections/Section3';
import Section4 from './app/sections/Section4';
import Section5 from './app/sections/Section5';
import Section6 from './app/sections/Section6';
import Section7 from './app/sections/Section7';
import Section8 from './app/sections/Section8';
import Section9 from './app/sections/Section9';
import Section10 from './app/sections/Section10';
import GlobalStyle from './GlobalStyle';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <main>      
      <GlobalStyle modalShow={modalShow} />
      <Section1 />
      <Section5 />
      <Section3 modalShow={modalShow} setModalShow={setModalShow}/>

      <Section10 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section9 />
      <Section8 />
    </main>
  );
}

export default App;
