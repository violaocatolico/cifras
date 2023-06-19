import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-image: url('imageSection1.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

  & .yellow { color: ${Colors.yellow}; }
  & .white { color: ${Colors.white}; }

  & h1 > * {
    font-size: ${Sizes.bigFontSize};
    font-weight: bolder;

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

  & h2 { margin-top: 25px; }
  & h4 {
    font-size: ${Sizes.smallFontSize};
    font-weight: normal;
    text-align: center;
    font-style: italic;
    margin-top: 100px;
    margin-bottom: 35px;
  }
`;

const Section = () => {
  return (
    <SectionStyle>
      <div className='sectionText'>
        <h1>
          <div className='yellow'>Cifras católicas</div>
          <div className='white'>de músicas para</div>
          <div className='yellow'>vários momentos</div>
          <div className='white'>da igreja</div>
        </h1>

        <h2>
          <div className='white'>ESPECIAL 13 em 1</div>
          <div className='yellow'>MÁRCIO DE JESUS VIEIRA</div>
        </h2>
        <h4>
          <div className='white'> O maior acervo de músicas católicas do Brasil</div>
        </h4>
      </div>
    </SectionStyle>
  );
}

export default Section;