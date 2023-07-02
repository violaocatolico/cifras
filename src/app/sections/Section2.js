import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';


const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  background-color: #ffc10d;

  & h2 { 
    padding-top: 100px;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      padding-top: 20px;
      font-size: ${ Sizes.bigFontSize4};
    }


    text-align: center;
    font-size: ${ Sizes.bigFontSize2};
    font-weight: normal;
  }

  & p {
    font-size: 25px;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: 18px;
      line-height: 28px;
    }


    text-align: center;
    padding: 70px;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      padding: 20px;
    }
  }

  & .backgroundCover {
    height: 300px;
    width: 100%;
    background-size: cover;
    background-image: url('backgroundCoverSection2.png');
    background-position: center;
    background-color: red;
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
`;

const Section = () => {
  return (
    <SectionStyle>
        <h2 className='fontTitle'>Nosso trabalho</h2>
        <p className='textDescripition'>
          Atualmente, contamos com 13 e-books de músicas católicas e 
          cada um deles aborda um tema diferente. Todas as cifras são simplificadas, assim, 
          permitimos que mais pessoas possam ter condições de tocar sem nenhuma dificuldade. 
          Além disso, todas as músicas estão gravadas em nosso canal do YouTube, 
          que inclusive conta com mais de 20 mil inscritos e mais de 3 milhões de visualizações. 
        </p>
        <div className='backgroundCover'></div>
    </SectionStyle>
  );
}

export default Section;