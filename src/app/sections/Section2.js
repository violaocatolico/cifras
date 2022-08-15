import React from 'react';
import styled from 'styled-components'
import  { DefaultSection, RoundedYellowButton, RoundedWhiteButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled(DefaultSection)`
  background-color: ${ Colors.black };
  display: flex;

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 80%;
    }
  }

  & .right {
    flex: 1;
    display: flex;
    padding-top: 8vh;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      justify-content: center;
    }

    & .rightContainer {
      @media (max-width: ${Sizes.mediaQueryBreak1}) {
        width: 90%;  
      }
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & * {
      margin: 20px 0;
    }

    & p {
      font-size: 1.2rem;
      color: ${ Colors.white };
      line-height: 35px;
      text-align: center;
      color: #cdcdcd;
    }
  }

`;

const Section = () => {

  return (
    <SectionStyle>
      <div className='left'>
        <img 
          src='cifras-para-todos-os-momentos-e-tempos-liturgicos.png' 
          alt='Cifras para todos os momentos e tempos litúrgicos' 
        />        
      </div>
      <div className='right'>
        <div className='rightContainer'>
          <p>
            Meus amigos, este é o nosso grande e-book 11 em 1. Ele leva esse nome porque nele estão reunidos todos os nossos e-books.
          </p>

          <RoundedYellowButton href="#">COMPRE AQUI O E-BOOK COMPLETO!</RoundedYellowButton>
          <RoundedWhiteButton href="#">Confira as músicas disponíveis</RoundedWhiteButton>
        </div>
      </div>
    </SectionStyle>
  );
}

export default Section;