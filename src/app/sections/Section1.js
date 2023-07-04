import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Sizes } from '../utils/sizes';

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-image: url('imageSection1.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  & .sectionText {
    position: relative;
    width: 75%;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      width: 95%;
    }
  }

  & h1 > * {
    font-size: ${Sizes.bigFontSize};
    line-height: 4.3rem;

    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      font-size: ${Sizes.bigFontSize2};
    }

    @media (max-width: ${Sizes.mediaQueryBreak3}) {
      font-size: ${Sizes.bigFontSize3};
    }

    @media (max-width: ${Sizes.mediaQueryBreak4}) {
      font-size: ${Sizes.bigFontSize4};
    }
  }

  & h2 { margin-top: 25px; }

  & .moreThan13Ebooks {
    margin-top: 30px;
    font-size: 20px;
    width: 50%;
  }

  & .counter {
    position: relative;
    background-color: #ffc10d;      
    border-radius: 10px;
    padding: 5px;
    width: 30%;
    margin-top: 30px;
    text-align: center;

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
      margin-bottom: 10px;
    }
  }
`;

const Section = () => {
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
      <div className='sectionText'>
        <h1>
          <div className='yellow fontTitle'>Cifras católicas</div>
          <div className='white fontTitle'>para momentos</div>
          <div className='yellow fontTitle'>sagrados na igreja</div>
        </h1>

        <h2 className='yellow fontTitle'>Especial 13 em 1</h2>
        <p className='white moreThan13Ebooks'>São 13 e-books! Mais de 500 cifras de todos os tempos litúrgicos na palma da sua mão!</p>


        <div className='counter'>
            <h4>ÚLTIMAS CHANCES PARA ADQUIRIR COM 50% DE DESCONTO</h4>
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

      </div>
    </SectionStyle>
  );
}

export default Section;