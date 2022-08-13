import React from 'react';
import styled from 'styled-components'
import  { DefaultSection } from './Components';
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const ebooks = [
  {
    title: 'Músicas católicas para advento e natal',
    link: '#',
    image: '1.png',
  },
  {
    title: 'Músicas católicas para a quaresma',
    link: '#',
    image: '2.png',
  },
  {
    title: 'Músicas católicas para a páscoa',
    link: '#',
    image: '3.png',
  },

  {
    title: 'Músicas católicas para o tempo comum',
    link: '#',
    image: '4.png',
  },

  {
    title: 'Músicas católicas para as partes fixas',
    link: '#',
    image: '5.png',
  },

  {
    title: 'Músicas católicas marianas',
    link: '#',
    image: '6.png',
  },

  {
    title: 'Músicas católicas para adoração',
    link: '#',
    image: '7.png',
  },

  {
    title: 'Músicas católicas mais conhecidas',
    link: '#',
    image: '8.png',
  },

  {
    title: 'Músicas católicas para grupo de oração',
    link: '#',
    image: '9.png',
  },

  {
    title: 'Músicas católicas que nos marcaram',
    link: '#',
    image: '10.png',
  },

  {
    title: 'Músicas católicas extras',
    link: '#',
    image: '11.png',
  },
]

const SectionStyle = styled(DefaultSection)`
  background-color: ${ Colors.black };
  display: flex;
  flex-direction: column;
  align-items: center;

  & .ebooksList {
    display: flex;
    flex-direction: row;
    width: 70%;
    flex-wrap: wrap;
    justify-content: center;
  }

  & > h1 {
    color: ${ Colors.white };
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: ${ Sizes.bigFontSize };
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
    </SectionStyle>
  );
}

export default Section;