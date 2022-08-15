import React from 'react';
import styled from 'styled-components'
import  { DefaultSection } from './Components';
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const SectionStyle = styled(DefaultSection)`
  background-color: ${ Colors.yellow };
  display: flex;
  flex-direction: column;
  align-items: center;

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
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    width: 90%;
    padding: 2%;
  }

  background-color: ${ Colors.yellow };
  border: solid 1px black;
  color: black;
  text-decoration: none;
  margin: 30px 0;
  font-weight: bold;
  color: white;
  font-size: 1.6rem;
  text-align: center;

  &:hover {
    background-color: #f1b300;
  }
`;

const Section = () => {

  return (
    <SectionStyle>
        <h1>VANTAGENS</h1>

        <Button href="#">Cifras simplificadas</Button>
        <Button href="#">Cifras corretas em cima das letras</Button>
        <Button href="#">Indicação rítmica em cada uma música</Button>
        <Button href="#">Vídeo aula de todas as músicas em nosso canal do YouTube</Button>

    </SectionStyle>
  );
}

export default Section;