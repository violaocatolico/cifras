import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import  { RoundedYellowEuQueroButton } from './Components';
import { Colors } from '../utils/colors';
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.black};
  display: flex;

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    flex-direction: column;
  }

  & .left {
    flex: 1;
    display: flex;
    padding-top: 8vh;
    justify-content: center;
    align-items: center;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      justify-content: center;
    }
    & .textDescription {
      display: flex;
    }
    & .h2 {
      justify-items: center;
    }

    & .leftContainer {
      @media (max-width: ${Sizes.mediaQueryBreak1}) {
        width: 90%;  
      }
      & h2 {
      color: white;
      margin-top: 100px;
    }
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & h4 {
      color: black;
      text-align: center;
      font-size: 13px;
    }

    & .counter {
      position: relative;
      background-color: #ffc10d;      
      border-radius: 10px;
      padding: 5px;
    }

    & .timeContainer {
      display: flex;
      width: 70%;
      margin: 0 auto;
    }

    & .hours {
      flex: 1;
      background-color: #745b13;
      border-radius: 5px;   
      box-shadow: 0px 9px 18px -4px rgba(0,0,0,0.62);

      margin: 20px 10px;
    }

    & .number {
      color: white;
      font-size: 35px;
      padding: 10px;
    }

    & .hoursName {
      color: white;
      font-size: 10px;
      font-weight: normal;
    }

    & p {
      font-size: 1.2rem;
      color: ${ Colors.white };
      line-height: 35px;
      text-align: center;
      color: #cdcdcd;
    }
  }

  & .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    & img {
      width: 70%;
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
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the seconds
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        if (minutes > 0) {
          setSeconds(59);
          setMinutes((prevMinutes) => prevMinutes - 1);
        } else {
          if (hours > 0) {
            setSeconds(59);
            setMinutes(59);
            setHours((prevHours) => prevHours - 1);
          } else {
            clearInterval(interval);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <SectionStyle>
      <div className='left'>
        <div className='leftContainer'>
          <div className='counter'>
            <h4>ÚLTIMAS CHANCES PARA ADQUIRIR 
              COM 50% DE DESCONTO
            </h4>
            <div className='timeContainer'>
              <div className='hours'>
                <p className='number'>{formatTime(hours)}</p>
                <p className='hoursName'>Horas</p>
              </div>
              <div className='hours'>
                <p className='number'>{formatTime(minutes)}</p>
                <p className='hoursName'>Minutos</p>
              </div>
              <div className='hours'>
                <p className='number'>{formatTime(seconds)}</p>
                <p className='hoursName'>Segundos</p>
              </div>                                                                                                                                                                                                                                                                 
            </div>
        </div>
        <h2>E-book 13 em 1</h2>
        <p>
          Meus amigos, este é o nosso grande e-book 13
          em 1. Ele leva esse nome porque nele estão
          reunidos todos os nossos e-books. Adquira agora
          mesmo com 50% de desconto!
        </p>
        <br />
        <RoundedYellowEuQueroButton href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
          EU QUERO
        </RoundedYellowEuQueroButton>
      </div>
      </div>
      <div className='right'>
        <img 
          src='imageSection5.webp' 
          alt='Cifras para todos os momentos e tempos litúrgicos' 
        />        
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