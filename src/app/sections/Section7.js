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

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
    }

    font-size: ${ Sizes.bigFontSize };
  }
`;

const Button = styled.a`
  width: 450px;
  padding: 20px;
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
  font-size: 1.3rem;
  width: 450px;
  height: 40px;
  padding: 20px;
  margin: 30px 0;
`;

const Section = () => {

  return (
    <SectionStyle>
        <h2>Feedbacks</h2>

        <Button href="https://pay.hotmart.com/S63363314B?bid=1649795795717" target="_blank">Cifras simplificadas</Button>
       
        <RoundedWhatsappButton>
            <div className='contactContainer'>
              <a href='https://wa.me/5538997506385' className='contactItem'>
              <div className='icon whatsapp'></div>
              Alguma dúvida?
              </a>
            </div>
        </RoundedWhatsappButton>
       </SectionStyle>
  );
}

export default Section;
