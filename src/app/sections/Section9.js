import React from 'react';
import styled from 'styled-components';
import  { RoundedYellowEuQueroButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
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
    text-align: center;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      justify-content: center;
    }

    .fontTitle {
      color: white;
      font-size: ${Sizes.bigFontSize4};
      width: 100%;

      @media (max-width: ${Sizes.mediaQueryBreak2}) {
        width: 90%;
      }
    }

    p {
      margin-top: 20px;
      font-size: 20px;
      color: white;
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
          Através da música os momentos na igreja podem ganhar outro patamar.
        </h1>
        <p>
          Seja responsável por esta mudança, aprenda a tocar em todas as situações, em todos os tempos litúrgicos, em todos os momentos da Santa Missa! Aproveita a oportunidade única de levar todos os meus e-books pela metade do preço!
        </p>
        <br />
        <br />

        <div className="shake">
          <RoundedYellowEuQueroButton className="element" href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
            Quero garantir o meu
          </RoundedYellowEuQueroButton>
        </div>
      </div>
      <div className='right'>
        <img 
          src='hostia.png' 
          alt='Cifras para todos os momentos e tempos litúrgicos' 
        />        
      </div>
    </SectionStyle>
  );
}

export default Section;  