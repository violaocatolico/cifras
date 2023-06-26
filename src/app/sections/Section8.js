import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const SectionStyle = styled.section`
  width: 100%;
  min-height: 70vh;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;

  & .sectionLeftRight {
    display: flex;

    & h2 {
      margin-bottom: 20px;
      color: ${Colors.yellow};
      font-size: ${Sizes.bigFontSize3};
    }

    & .left {

      flex: 1;
      padding: 80px 80px;

      & .aboutMe {
        width: 50%;
        background-color: ${Colors.yellow};
        padding: 30px;
        border-radius: 30px;
        line-height: 25px;
      }
    }

    & .right {
      padding: 80px 80px;
      flex: 1;
      
      & .contactOutline, & .socialNetworks {
        color: white;
        height: 50px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        border-radius: 30px;
        padding: 0 20px;
        border: solid 1px ${Colors.yellow};
      }

      & .contactOutline .icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
        background-color: white;

        &.phone {
          background-image: url('phone.png');
          background-size: 50%;
          background-repeat: no-repeat;
          background-position: center;
        }

        &.phone {
          background-image: url('phone.png');
          background-size: 50%;
          background-repeat: no-repeat;
          background-position: center;
        }

        &.email {
          background-image: url('email.png');
          background-size: 50%;
          background-repeat: no-repeat;
          background-position: center;
        }
      }

      & .socialNetworks {
        display: flex;
        justify-content: space-between;
        background-color: ${Colors.yellow};
        color: black;
        font-weight: bold;

        & .linksContainer {
          display: flex;

          & a {
            width: 30px;
            height: 30px;
            margin: 10px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;

            &.tiktok { background-image: url('tiktok.png'); }
            &.youtube { background-image: url('youtube.png'); }
            &.instagram { background-image: url('instagram.png'); }
          }
        }
      }
    }
  }

  & .sloganLord {
    text-align: center;
    font-size: 1.3rem;
    font-style: italic;
    color: white;
  }

  background-image: url('imageSection8.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;


const Section = () => {
  return (
    <SectionStyle>
      <div className='sectionLeftRight'>
        <div className='left'>
          <h2>Sobre mim</h2>
          <div className='aboutMe'>Meu nome é Márcio, tenho 27 anos e sou de Montes Claros, no norte de Minas Gerais. Toco violão há mais de 15 anos e estou aqui para ajudá-los!</div>
        </div>
        <div className='right'>
          <h2>Contato</h2>
          <div className='contactOutline'>
            <div className='icon phone'></div>
            <span>+55 (38) 99750-6385</span>
          </div>
          <div className='contactOutline'>
            <div className='icon email'></div>
            <span>marciovieiraguitar@gmail.com</span>
          </div>
          <div className='socialNetworks'>
            <span>REDES SOCIAIS</span>
            <div className='linksContainer'>
              <a href='#' className='tiktok'></a>
              <a href='#' className='youtube'></a>
              <a href='#' className='instagram'></a>
            </div>            
          </div>
        </div>
      </div>
      <p className='sloganLord'>"A serviço do povo de Deus"</p>
    </SectionStyle>
  );
}

export default Section;
