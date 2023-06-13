import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background: #ffc10d;
  display: flex;
  justify-content: center;
  align-items: center;
    
  & .sectionText {
    position: relative;
    width: 75%;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      width: 95%;
    }
  }

  & h1 > * {
    font-size: ${Sizes.bigFontSize};
    font-weight: normal;
    text-align: center;
  }

  & .black { color: ${Colors.black}; 

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      font-size: ${Sizes.bigFontSize2};
    }

    @media (max-width: ${Sizes.mediaQueryBreak3}) {
      font-size: ${Sizes.bigFontSize3};
    }

    @media (max-width: ${Sizes.mediaQueryBreak4}) {
      font-size: ${Sizes.bigFontSize4};
    }
  }

  & h2 { 
    margin-top: 25px; 
    text-align: center;
    justify-items: center;
    justify-items: center;
    margin-top: 50px;
    margin-bottom: 35px;
    font-weight: normal;
  }
  
`;

const Section = () => {
  return (
    <SectionStyle>
      <div className='sectionText'>
        <h1>
          <div className='yellow'>Nosso trabalho</div>
          
        </h1>
        <h2>
          <div className='black'>Atualmente, contamos com 13 e-books de músicas católicas e 
          cada um deles aborda um tema diferente. Todas as cifras são simplificadas, assim, 
          permitimos que mais pessoas possam ter condições de tocar sem nenhuma dificuldade. 
          Além disso, todas as músicas estão gravadas em nosso canal do YouTube, 
          que inclusive conta com mais de 20 mil inscritos e mais de 3 milhões de visualizações. </div>
        </h2>
      </div>
    </SectionStyle>
  );
}

export default Section;