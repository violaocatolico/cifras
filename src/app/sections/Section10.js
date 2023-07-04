import React from 'react';
import styled from 'styled-components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.yellow };
  color: black;
  display: flex;

  p.fontTitle {
    font-size: medium;
  }

  h4.fontTitle {
    font-size: 20px;
  }

  h1.fontTitle {
    font-size: ${Sizes.bigFontSize};
  }

  p {
    line-height: 30px;
  }

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
        <p className='fontTitle'>Quem sou eu?</p>
        <h4 className='fontTitle'>Prazer, eu sou</h4>
        <h1 className='fontTitle'>Márcio</h1>
        <p>
          Quero te mostrar que é possível tocar violão sem complicação! Depois de 15 anos tocando resolvi ajudar a quem quiser aprender. Já gravei mais de 2 mil videoaulas em meu canal inserir link do canal ensinando a tocar de maneira fácil e prática.
        </p>
      </div>
      <div className='right'>
        <img 
          src='channel.png' 
          alt='Cifras para todos os momentos e tempos litúrgicos' 
        />        
      </div>
    </SectionStyle>
  );
}

export default Section;  