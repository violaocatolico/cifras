import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const SectionStyle = styled.section`
  width: 100%;
  min-height: 70vh;

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    min-height: fit-content;
  }

  background-color: ${ Colors.dark };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${Sizes.mediaQueryBreak1}) {
    padding-bottom: 50px;
  }

  & h2 {
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: normal;
    
    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
      margin-top: 20px;
    }

    font-size: ${ Sizes.bigFontSize };
  }
`;

const Button = styled.a`
  width: 480px;
  padding: 35px;
  font-size: 1.3rem;
  margin: 30px 0;
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    width: 90%;
    padding: 3%;
    font-size: 1.4rem;
    margin: 3% 0;
  }

  background-color: ${ Colors.dark };
  border: solid 1px ${ Colors.yellow };
  border-radius: 50px;
  color: ${ Colors.yellow };
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${ Colors.yellow };
    color: ${ Colors.dark };
  }
`;

const ButtonChannel = styled(Button)`
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    width: 90%;
    padding: 3%;
    font-size: 1.4rem;
    margin: 3% 0;
  }
  text-decoration: underline;
  background-color: ${ Colors.dark };
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  width: 480px;
  padding: 20px;
  margin: 30px 0;
`;

const RoundedWhatsappButton = styled.a`
  transition: transform .1s;
  background-color: ${Colors.white};
  color: ${ Colors.dark };
  text-decoration: none;
  font-weight: bold;  
  right: 20px;
  bottom: 20px;
  position: fixed;
  z-index: 99;
  border-radius: 45px;
  padding: 10px 20px;
  display: flex;
  align-items: center;

  & .iconWhatsapp {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background-image: url('whatsapp.png');
    background-size: contain;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Section = () => {
  return (
    <SectionStyle>
        <h2 className='fontTitle yellow copy-text'>Benefícios</h2>

        <Button target="_blank">Cifras simplificadas</Button>
        <Button target="_blank">Cifras corretas em cima das letras</Button>
        <Button target="_blank">Indicação rítmica em cada música</Button>
        <Button target="_blank">Dicionário de acordes</Button>
        <Button target="_blank">Músicas sem pestana</Button>
        <ButtonChannel href="https://www.youtube.com/violaocatolico" target="_blank">Vídeo aula de todas as músicas em nosso canal do YouTube</ButtonChannel>
        <RoundedWhatsappButton href='https://wa.me/5538997506385'>
          <div className='iconWhatsapp'></div>
          <p className='question'>Alguma dúvida?</p>
        </RoundedWhatsappButton>
       </SectionStyle>
  );
}

export default Section;
