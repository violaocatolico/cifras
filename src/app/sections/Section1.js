import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-image: url('marcio-vieira.png');
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
`;

const Section = () => {
  return (
    <SectionStyle>
      <div className='sectionText'>
        <h1>
          <div className='yellow'>CIFRAS</div>
          <div className='white'>CATÓLICAS DE</div>
          <div className='white'>MÚSICAS PARA</div>
          <div className='yellow'>VÁRIOS MOMENTOS</div>
          <div className='white'>DA IGREJA</div>
        </h1>

        <h2>
          <div className='white'>Especial 12 em 1</div>
          <div className='yellow'>Márcio de Jesus Vieira</div>
        </h2>
      </div>
    </SectionStyle>
  );
}

export default Section;