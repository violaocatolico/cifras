import React from 'react';
import styled from 'styled-components';
import  { RoundedYellowEuQueroButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;

  min-height: 90vh;
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    min-height: fit-content;
  }
  
  background-color: ${ Colors.dark };
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
    padding-right: 8%;
    align-items: center;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      justify-content: center;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .fontTitle {
      color: white;
      font-size: ${Sizes.bigFontSize3};
      width: 100%;
      text-align: center;

      @media (max-width: ${Sizes.mediaQueryBreak2}) {
        font-size: 2rem;
      }
    }
  }

  & .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 70px;
    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      margin-top: 0;
      padding-top: 40px;
      padding-bottom: 40px;
    }

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
          Para quem deseja <span className='yellow'>elevar o nível do ministério</span> de música
        </h1>
        <br />
        <br />
        <br />
        <div className="shake">
          <RoundedYellowEuQueroButton href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
            EU QUERO
          </RoundedYellowEuQueroButton>
        </div>
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