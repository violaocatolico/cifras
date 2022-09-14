import React from 'react';
import styled from 'styled-components'
import  { RoundedYellowButton } from './Components';
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const ebooks = [
  {
    title: 'Músicas católicas para advento e natal',
    link: 'https://pay.hotmart.com/N62353886T?bid=1649784419701',
    image: '1.png',
  },
  {
    title: 'Músicas católicas para a quaresma',
    link: 'https://pay.hotmart.com/P68319360J?bid=1649784445020',
    image: '2.png',
  },
  {
    title: 'Músicas católicas para a páscoa',
    link: 'https://pay.hotmart.com/A67803816O?bid=1649784461481',
    image: '3.png',
  },

  {
    title: 'Músicas católicas para o tempo comum',
    link: 'https://pay.hotmart.com/S64580532H?bid=1649784479849',
    image: '4.png',
  },

  {
    title: 'Músicas católicas para as partes fixas',
    link: 'https://pay.hotmart.com/G68474939T?bid=1649784495138',
    image: '5.png',
  },

  {
    title: 'Músicas católicas marianas',
    link: 'https://pay.hotmart.com/J60244445K?bid=1649784521066',
    image: '6.png',
  },

  {
    title: 'Músicas católicas para adoração',
    link: 'https://pay.hotmart.com/A61419780H?bid=1660538952946',
    image: '7.png',
  },

  {
    title: 'Músicas católicas mais conhecidas',
    link: 'https://pay.hotmart.com/X58232470X?bid=1649784567789',
    image: '8.png',
  },

  {
    title: 'Músicas católicas para grupo de oração',
    link: 'https://pay.hotmart.com/W66899425V?bid=1649784602055',
    image: '9.png',
  },

  {
    title: 'Músicas católicas que nos marcaram',
    link: 'https://pay.hotmart.com/L63950078A?bid=1649784617630',
    image: '10.png',
  },

  {
    title: 'Músicas católicas extras',
    link: 'https://drive.google.com/file/d/1_GTamsgU96X89E-19EAQ0bWwO2GcR7pY/view?usp=sharing',
    image: '11.png',
  },
]

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${ Colors.black };
  display: flex;
  flex-direction: column;
  align-items: center;

  & .ebooksList {
    width: 70%;
    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      width: 100%;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  & > h1 {
    color: ${ Colors.white };
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: ${ Sizes.bigFontSize };

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      font-size: ${Sizes.bigFontSize4};
    }
  }

  & .btnYellow {
    margin: 30px;
    text-align: center;

    @media (min-width: ${Sizes.mediaQueryBreak2}) {
      width: 300px;
      line-height: 30px;
    }
  }
`;

const EbookStyle = styled.a`
  background-color: ${ Colors.black };
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 190px;
  margin: 15px;
  background-image: ${ props => `url(ebooks/${props.backgroundImage})` };
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;

  & h1 {
    font-size: 1rem;
  }
`;

const Section = () => {
  return (
    <SectionStyle>
        <h1>E-BOOKS</h1>

        <div className='ebooksList'>
          { ebooks.map((ebook, index) => (
            <EbookStyle 
              key={ index }
              href={ ebook.link } 
              backgroundImage={ ebook.image }
              alt={ ebook.title }
            />
          )) }
        </div>

        <RoundedYellowButton className="btnYellow" href="https://pay.hotmart.com/S63363314B?bid=1649795795717">
          QUERO ADQUIRIR TODOS DE UMA SÓ VEZ COM 50% DE DESCONTO
        </RoundedYellowButton>
    </SectionStyle>
  );
}

export default Section;