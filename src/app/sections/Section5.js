import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'
import Carousel from '../components/carousel';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.yellow };
  display: flex;
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & .left, & .right {
    display: flex;
  }

  & .left {
    flex: 1.5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 40px;

    & .icon {
      background-color: black;
      width: 20px;
    }

    & .quote {
      line-height: 1.6em;
      font-size: 1.4em;
      background-color: white;
      width: 70%;
      padding: 60px;
      @media (max-width: ${Sizes.mediaQueryBreak3}) {
        padding: 40px 2%;
        width: 90%;
        font-size: 1.2rem;
      }
      
      position: relative;

      & .icon, & .icon-profile {
        position: absolute;

        @media (max-width: ${Sizes.mediaQueryBreak3}) {
          width: 50px;
          height: 50px;
        }

        width: 100px;
        height: 100px;

        background-repeat: no-repeat;
        background-position: center;
      }
      
      & .icon {
        top: -60px;
        @media (max-width: ${Sizes.mediaQueryBreak3}) {
          top: -30px;
        }
        
        background-color: black;
        background-image: url('aspas.svg');
        background-size: 80%;
        border-radius: 8px;
      }

      & .icon-profile {
        bottom: -60px;
        right: 4rem;
        @media (max-width: ${Sizes.mediaQueryBreak3}) {
          bottom: -30px;
          right: 1rem;
        }
        
        align-self: flex-start;
        background-image: url('marcio-vieira-2.webp');
        background-size: cover;
        border-radius: 50%;
      }
    }

    & .contactContainer {
      display: flex;
      margin-top: 100px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & .contactItem {
        background-color: white;
        box-shadow: 0px 13px 15px -12px #000000;
        width: 70%;
        margin: 10px 0;
        padding: 14px 30px;
        text-align: center;
        color: black;
        position: relative;

        & .icon {
          background-color: black;
          width: 60px;
          height: 60px;
          background-size: 70%;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 50%;
          top: -7px;

          &.whatsapp {
            background-image: url('whatsapp.svg');
            left: -40px;
            position: absolute;
          }
          &.instagram {
            background-image: url('instagram.svg');
            right: -40px;
            position: absolute;
          }
          &.youtube {
            background-image: url('youtube.svg');
            left: -40px;
            position: absolute;
          }
          &.tiktok {
            background-image: url('tiktok.png');
            right: -40px;
            position: absolute;
          }
        }
      }
    }

    & h2 {
      font-weight: bold;
      font-size: 2.5rem;
      margin-bottom: 5px;
    }

  }
`;

const TestimonialStyle = styled.div`
  background-image: url(${props => props.img});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const TestimonialTitleStyle = styled.h1`

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    font-size: 20px;
  }

  font-size: 40px;
  padding: 40px 0 0 0;
  text-align: center;
`;

const Section = () => {
  return (
    <SectionStyle>
      <div className='left'>
        <TestimonialTitleStyle>O que estão dizendo sobre meu trabalho:</TestimonialTitleStyle>
        <Carousel itemsList={
          Array.from({length: 8},(_, i) => {
            return <TestimonialStyle key={i} img={`depoimentos/${i + 1}.png`} />
          })
        }/>
      </div>
      <div className='right'>
        <div className='quote'>
          <div className='icon'></div>
          <p className='text'>
            Meu nome é Márcio, tenho {new Date().getFullYear() - 1996} anos e sou de Montes Claros, no norte de Minas Gerais. Toco violão há mais de 15 anos e estou aqui para ajudá-los!
          </p>
          <div className='icon-profile'></div>
        </div>

        <div className='contactContainer'>
          <h2>Contato</h2>
          <a href='https://wa.me/5538997506385' className='contactItem'>
            <div className='icon whatsapp'></div>
            WHATSAPP
          </a>
          <a href='https://www.instagram.com/cifracatolicas/' className='contactItem'>
            INSTAGRAM
            <div className='icon instagram'></div>
          </a>
          <a href='https://www.youtube.com/violaocatolico' className='contactItem'>
            <div className='icon youtube'></div>
            YOUTUBE
          </a>
          <a href='https://www.tiktok.com/@cifracatolicas' className='contactItem'>
            <div className='icon tiktok'></div>
            TIKTOK
          </a>
        </div>
      </div>
    </SectionStyle>
  );
}

export default Section;