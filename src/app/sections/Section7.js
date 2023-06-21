import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const SectionStyle = styled.section`
  position: relative;
  width: 100%;
  min-height: 70vh;
  background-color: ${ Colors.black };
  align-items: center;
  justify-content: center;  

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
    }
    font-size: ${ Sizes.bigFontSize };
    
  & .title {
     text-align: center;
     color: white; 
     font-size: 35px;
  }
  & .containerFeedback {
    display: flex;
    justify-content: center;
  }

  & .feedback {
    flex-direction: row;
    width: 15%;
    background-color: yellow;
    padding: 15px;
    margin: 15px;
  }

  & .depoiment {
    font-size: 15px;
  }

  & .namePeople {
    font-size: 15px;
  }

`;

const Section = () => {

  return (
    <SectionStyle>
      <div className='title'>
        <h2>
        Feedbacks
        </h2>
      </div>
      <div className='containerFeedback'>
        <div className='feedback'>
          <img src=''></img>
          <p className='depoiment'> “Hola! Sou do Paraguay e adoro assistir seus vídeos, me motiva bastante. 
            Faz tempo que estou tentando tocar meu violão e suas cifras me ajudam muito.
            Acabei de adquirir seus e-books."</p>
            <p className='namePeople'>- Andréia -</p>
        </div>
        <div className='feedback'>
          <img src=''></img>
          <p className='depoiment'> “Ôh irmão, obrigada! Que Deus te abençoe e Nossa Senhora te 
            cubra com o manto sagrado dela. Estou vendo seus vídeos no YouTube 
            para aprender tocar violão e tocar as músicas pra cantar na igreja. 
            Muito obrigada.”</p>
            <p className='namePeople'>- Babi -</p>
        </div>
        <div className='feedback'>
          <img src=''></img>
          <p className='depoiment'> "Parabéns pela iniciativa! Estou começando violão e
            gostei muito das cifras e ritmos simplificados.” </p>
          <p className='namePeople'>- Carlos -</p>
        </div>
      </div>
      
    </SectionStyle>
  );
}

export default Section;
