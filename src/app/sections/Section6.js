import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'
import  { RoundedWhatsappButton } from './Components';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 70vh;
  background-color: ${ Colors.yellow };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  & h2 {
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: normal;
    
    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
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

  background-color: ${ Colors.yellow };
  border: solid 1px black;
  border-radius: 50px;
  color: black;
  text-decoration: none;
  font-weight: normal;
  color: black;
  text-align: center;

  &:hover {
    background-color: #f1b300;
  }
`;

const ButtonChannel = styled(Button)`
  text-decoration: underline;
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  width: 480px;
  height: 40px;
  padding: 20px;
  margin: 30px 0;
`;

const Section = () => {

  return (
    <SectionStyle>
        <h2>Vantagens</h2>

        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Cifras simplificadas</Button>
        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Cifras corretas em cima das letras</Button>
        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Indicação rítmica em cada música</Button>
        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Dicionário de acordes</Button>
        <ButtonChannel href="https://www.youtube.com/violaocatolico" target="_blank">Vídeo aula de todas as músicas em nosso canal do YouTube</ButtonChannel>
        <RoundedWhatsappButton>
            <div className='contactContainer'>
              <a href='https://wa.me/5538997506385' className='contactItem'>
              <div className='icon whatsapp'></div>
              <p className='query'>Alguma dúvida?</p>
              </a>
            </div>
        </RoundedWhatsappButton>
       </SectionStyle>
  );
}

export default Section;
