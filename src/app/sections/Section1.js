import React from 'react';
import styled from 'styled-components'
import DefaultSection from './DefaultSection';
import { Colors } from '../utils/colors'

const SectionStyle = styled(DefaultSection)`
  background-image: url('marcio-vieira.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  & .overlay {
    width: 100%;
    height: 100%;
    background-color: ${Colors.black};
    opacity: 0.5;
    position: absolute;
  }

  & .sectionText {
    position: relative;
    width: 75%;
  }

  & .yellow {
    color: ${Colors.yellow};
  }
  & .white {
    color: ${Colors.white};
  }

  & h1 > * {
    font-size: 4rem;
    font-weight: bolder;
  }

  & h2 {
    margin-top: 25px;
  }

`;

function App() {
  return (
    <SectionStyle>
      <div className='overlay'></div>
      <div className='sectionText'>
        <h1>
          <div className='yellow'>CIFRAS</div>
          <div className='white'>CATÓLICAS DE</div>
          <div className='white'>MÚSICAS PARA</div>
          <div className='yellow'>VÁRIOS MOMENTOS</div>
          <div className='white'>DA IGREJA</div>
        </h1>

        <h2>
          <div className='white'>Especial 11 em 1</div>
          <div className='yellow'>Márcio de Jesus Vieira</div>
        </h2>
      </div>

      
    </SectionStyle>
  );
}

export default App;
