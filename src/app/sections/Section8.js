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
  justify-content: center;

  & .sectionLeftRight {
    display: flex;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      flex-direction: column;
    }

    & h2 {
      margin-bottom: 20px;
      color: ${Colors.yellow};
      font-size: ${Sizes.bigFontSize3};

      @media (max-width: ${Sizes.mediaQueryBreak1}) {
        font-size: ${Sizes.bigFontSize4};
        text-align: center;
      }
    }
    
    & .left, & .right {
      padding: 80px 80px;

      @media (max-width: ${Sizes.mediaQueryBreak1}) {
        padding: 10px 10px;
      }
    }

    & .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      & .contactOutline, & .socialNetworks {
        color: white;
        width: 30%;

        @media (max-width: ${Sizes.mediaQueryBreak2}) {
          width: 90%;
        }

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
        color: ${ Colors.dark };
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
    margin: 40px 0;
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
        <div className='right'>
          <h2 className='fontTitle'>Contato</h2>
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
              <a href='https://www.tiktok.com/@cifracatolicas' className='tiktok'> </a>
              <a href='https://www.youtube.com/violaocatolico' className='youtube'> </a>
              <a href='https://www.instagram.com/cifracatolicas/' className='instagram'> </a>
            </div>            
          </div>
        </div>
      </div>
      <p className='sloganLord fontCoursive'>"A serviço do povo de Deus"</p>
    </SectionStyle>
  );
}

export default Section;
