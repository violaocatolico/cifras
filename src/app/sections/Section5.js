import React from 'react';
import styled from 'styled-components';
import  { RoundedYellowEuQueroButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.black};
  display: flex;

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 8%;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      justify-content: center;
    }

    .fontTitle {
      color: white;
      font-size: ${Sizes.bigFontSize3};
      width: 65%;
    }
  }

  & .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    & img {
      width: 70%;
    }
  }
`;

const Section = () => {
  return (
    <SectionStyle>
      <div className='left'>        
        <h1 className='fontTitle'>
          Para quem deseja elevar o nível do ministério de música.
        </h1>
        <br />
        <RoundedYellowEuQueroButton href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
          EU QUERO
        </RoundedYellowEuQueroButton>
      </div>
      <div className='right'>
        <img 
          src='imageSection5.webp' 
          alt='Cifras para todos os momentos e tempos litúrgicos' 
        />        
      </div>
    </SectionStyle>
  );
}

export default Section;  