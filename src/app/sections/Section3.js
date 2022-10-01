import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const SectionStyle = styled.section`
  width: 100%;
  min-height: 70vh;
  background-color: ${ Colors.yellow };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    margin-top: 50px;
    margin-bottom: 25px;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
    }

    font-size: ${ Sizes.bigFontSize };
  }
`;

const Button = styled.a`
  width: 450px;
  padding: 20px;
  font-size: 1.6rem;
  margin: 30px 0;
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    width: 90%;
    padding: 3%;
    font-size: 1.4rem;
    margin: 3% 0;
  }

  background-color: ${ Colors.yellow };
  border: solid 1px black;
  color: black;
  text-decoration: none;
  font-weight: bold;
  color: white;
  text-align: center;

  &:hover {
    background-color: #f1b300;
  }
`;

const ButtonChannel = styled(Button)`
  text-decoration: underline;
`;

const Section = () => {

  return (
    <SectionStyle>
        <h1>VANTAGENS</h1>

        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Cifras simplificadas</Button>
        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Cifras corretas em cima das letras</Button>
        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Indicação rítmica em cada música</Button>
        <ButtonChannel href="https://www.youtube.com/violaocatolico" target="_blank">Vídeo aula de todas as músicas em nosso canal do YouTube</ButtonChannel>

    </SectionStyle>
  );
}

export default Section;