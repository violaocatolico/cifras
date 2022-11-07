import React from 'react';
import styled from 'styled-components';
import  { RoundedYellowButton, RoundedWhiteButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.black };
  display: flex;

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 80%;
    }
  }

  & .right {
    flex: 1;
    display: flex;
    padding-top: 8vh;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      justify-content: center;
    }

    & .rightContainer {
      @media (max-width: ${Sizes.mediaQueryBreak1}) {
        width: 90%;  
      }
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & * {
      margin: 20px 0;
    }

    & p {
      font-size: 1.2rem;
      color: ${ Colors.white };
      line-height: 35px;
      text-align: center;
      color: #cdcdcd;
    }
  }
`;

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
  
  /* padding: 50px; */

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

  & .btn-close-modal {
    background-color: transparent;
    border: none;
    position: fixed;
    right: 1%;
    top: 20px;
    color: white;
    font-size: 25px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;

    width: 50px;
    height: 50px;
    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      width: 25px;
      height: 25px;
    }
  }
`;


const Section = (props) => {

  return (
    <SectionStyle>
      <div className='left'>
        <img 
          src='cifras-para-todos-os-momentos-e-tempos-liturgicos.png' 
          alt='Cifras para todos os momentos e tempos litúrgicos' 
        />        
      </div>
      <div className='right'>
        <div className='rightContainer'>
          <p>
            Meus amigos, este é o nosso grande e-book 12 em 1. Ele leva esse nome porque nele estão reunidos todos os nossos e-books.
          </p>
          <RoundedYellowButton href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
            COMPRE AQUI O E-BOOK COMPLETO!
          </RoundedYellowButton>
          <RoundedWhiteButton href="#" onClick={(e) => {
            e.preventDefault();
            props.setModalShow(true);
          }}>
            Confira as músicas disponíveis
          </RoundedWhiteButton>
        </div>
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

export default Section;
