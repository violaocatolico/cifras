import React from 'react';
import styled from 'styled-components';
import  { RoundedBlackButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.yellow };
  display: flex;
  flex-direction: row;

  & .left, & .right {
    flex: 1;
  }

  & .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      padding-top: 20px;
    }
  }

  & .right {
    
  }

  & img {
    width: 100%;
  }

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & h2 {
    margin-top: 25px; 
    text-align: center;
    justify-items: center;
    margin-top: 180px;
    margin-bottom: 35px;
    font-size: ${ Sizes.bigFontSize2 };

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      margin-top: 0;
      font-size: ${Sizes.bigFontSize4};
    }
  }

  & p {
    font-size: 1.2rem;
    color: ${ Colors.black };
    text-align: center;
    color: black;
    width: 50%;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      width: 90%;
    }

    margin: 0 auto 50px auto;
  }
`;

const Section = (props) => {
  return (
    <SectionStyle>
      <div className='left'>
        <h2 className='fontTitle'>E-book gratuito</h2>
        <p>Baixe agora mesmo nosso e-book extra totalmente gratuito!</p>
      
        <RoundedBlackButton href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
          Download grátis
        </RoundedBlackButton>
      </div>
      <div className='right'>
        <img src='imageSection4.webp' alt='Músicas catolicas extras' />
      </div>
      

      <ModalStyle modalShow={props.modalShow} onClick={() => props.setModalShow(false)}>
        <button className='btn-close-modal' onClick={(e) => e.preventDefault()}>X</button>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          {
            Array.from({length: 25},(_, x) => {
              return <img key={x} src={`ebooks/sumario/${x + 1}.jpg`} alt={`Sumário página ${x + 1}`} />
            })
          }
        </div>
      </ModalStyle>
    </SectionStyle>
  );
}

const ModalStyle = styled.div`
  display: flex;
  ${(props) => {
    if (!props.modalShow) {
      return `display: none;`;
    }
  }};

  font-size: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;  
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  overflow-y: scroll;

  & .modal-content {
    position: static;
    width: 50%;
    height: 100%;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      width: 85%;
    }
  }

  & .modal-content img {
    width: 100%;
  }

`;

export default Section;
