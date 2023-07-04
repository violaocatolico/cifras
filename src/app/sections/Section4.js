import React from 'react';
import styled from 'styled-components';
import  { RoundedBlackButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  padding-bottom: 70px;
  background-color: ${ Colors.yellow };
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  & img {
    width: 200px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & h2 {
    text-align: center;
    font-size: ${ Sizes.bigFontSize3 };
    font-weight: lighter;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
    }
  }

  & p {
    font-size: 1.2rem;
    color: ${ Colors.black };
    text-align: center;
    color: black;
    width: 50%;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      width: 90%;
    }

    margin: 0 auto 50px auto;
  }
`;

const Section = () => {
  return (
    <SectionStyle>
      <h2 className='fontTitle'>Quer conhecer o meu trabalho?  </h2> 
      <h2 className='fontTitle'>Baixe meu e-book extra totalmente gratuito!</h2>
    
      <img src='ebook-free.png' alt='Músicas catolicas extras' />

      <RoundedBlackButton href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
        Download grátis
      </RoundedBlackButton>
    </SectionStyle>
  );
}

export default Section;
