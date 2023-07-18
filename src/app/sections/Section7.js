import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const SectionStyle = styled.section`
  position: relative;
  width: 100%;
  min-height: 70vh;
  background-color: ${ Colors.dark };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  @media (max-width: ${Sizes.mediaQueryBreak1}) {
    font-size: ${Sizes.bigFontSize4};
  }
    
  & h2 {
     text-align: center;
     color: ${Colors.yellow};
     font-size: ${ Sizes.bigFontSize2 };
     margin-bottom: 80px;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${ Sizes.bigFontSize4 };
      margin-top: 20px;
      margin-bottom: 40px;
    } 
  }

  & .containerFeedback {
    display: flex;
    justify-content: center;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      flex-direction: column;

      align-items: center;

      .feedback {
        width: 80% !important;
        margin: 40px 0 !important;
      }
    }

    & .feedback {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 15%;
      background-color: ${ Colors.yellow };
      padding: 0 15px 15px 15px;
      margin: 15px;
      position: relative;

      & .depoiment {
        font-size: 15px;
        text-align: center;
        margin-bottom: 20px;
      }

      & .namePeople {
        font-size: 15px;
        position: absolute;
        bottom: 10px;
      }

      & .userImage {
        margin-top: -50px;
        margin-bottom: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      & .userImage1 { background-image: url('user-feedback-1.jpeg'); }
      & .userImage2 { background-image: url('user-feedback-2.png'); }
      & .userImage3 { background-image: url('user-feedback-3.png'); }
      & .userImage4 { background-image: url('user-feedback-4.png'); }
    }
  }
`;

const Section = () => {
  return (
    <SectionStyle>
      <h2 className='fontTitle'>Feedbacks</h2>
      <div className='containerFeedback'>
        <div className='feedback'>
          <div className='userImage userImage1'></div>
          <p className='depoiment'> “Hola! Sou do Paraguay e adoro assistir seus vídeos, me motiva bastante. 
            Faz tempo que estou tentando tocar meu violão e suas cifras me ajudam muito.
            Acabei de adquirir seus e-books."
          </p>
          <p className='namePeople'>- Andréia -</p>
        </div>
        <div className='feedback'>
          <div className='userImage userImage2'></div>
          <p className='depoiment'> “Ôh irmão, obrigada! Que Deus te abençoe e Nossa Senhora te 
            cubra com o manto sagrado dela. Estou vendo seus vídeos no YouTube 
            para aprender tocar violão e tocar as músicas pra cantar na igreja. 
            Muito obrigada.”
          </p>
          <p className='namePeople'>- Babi -</p>
        </div>
        <div className='feedback'>
          <div className='userImage userImage3'></div>
          <p className='depoiment'> "Parabéns pela iniciativa! Estou começando violão e
            gostei muito das cifras e ritmos simplificados.” 
          </p>
          <p className='namePeople'>- Carlos -</p>
        </div>

        <div className='feedback'>
          <div className='userImage userImage4'></div>
          <p className='depoiment'>
            "Olá Márcio, tudo bem? Encontrei você no YouTube agora e gostei do seu trabalho. Estava procurando uma aula de violão para a música Corpo Santo da Fátima Souza. Sua didática é muito boa. Eu já tentei aprender tocar violão mas sempre me enrolo e não vou pra frente. 
            Vou tentar novamente com a sua didática. Acabei de comprar seus ebooks e também achei super organizado."
          </p>
          <p className='namePeople'>- Camila -</p>
        </div>
      </div>
    </SectionStyle>
  );
}

export default Section;
