import React from 'react';
import styled from 'styled-components'
import  { RoundedYellowButton } from './Components';
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes'

const ebooks = [
  {
    title: 'Músicas católicas para advento e natal',
    link: 'https://loja.infinitepay.io/violaocatolico/adx4832-e-book-tempo-do-advento',
    image: 'musicasAdvento.png',
  },
  {
    title: 'Músicas católicas para o natal',
    link: 'https://loja.infinitepay.io/violaocatolico/wbk8312-e-book-tempo-do-natal',
    image: 'musicasNatal.png',
  },
  {
    title: 'Músicas católicas para a quaresma',
    link: 'https://loja.infinitepay.io/violaocatolico/vam5529-e-book-tempo-da-quaresma',
    image: '2.png',
  },
  {
    title: 'Músicas católicas para a páscoa',
    link: 'https://loja.infinitepay.io/violaocatolico/bpl0067-e-book-tempo-pascal',
    image: '3.png',
  },

  {
    title: 'Músicas católicas para o tempo comum',
    link: 'https://loja.infinitepay.io/violaocatolico/vsp3805-e-book-tempo-comum',
    image: '4.png',
  },

  {
    title: 'Músicas católicas para as partes fixas',
    link: 'https://loja.infinitepay.io/violaocatolico/nwp8953-e-book-partes-fixas',
    image: '5.png',
  },

  {
    title: 'Músicas católicas marianas',
    link: 'https://loja.infinitepay.io/violaocatolico/aim9272-e-book-musicas-marianas',
    image: '6.png',
  },

  {
    title: 'Músicas católicas para adoração',
    link: 'https://loja.infinitepay.io/violaocatolico/whz6015-e-book-musicas-para-adoracao',
    image: '7.png',
  },

  {
    title: 'Músicas católicas mais conhecidas',
    link: 'https://loja.infinitepay.io/violaocatolico/ctn6553-e-book-musicas-mais-conhecidas',
    image: '8.png',
  },

  {
    title: 'Músicas católicas para grupo de oração',
    link: 'https://loja.infinitepay.io/violaocatolico/xiz9104-e-book-musicas-para-grupo-de-oracao',
    image: '9.png',
  },

  {
    title: 'Músicas católicas que nos marcaram',
    link: 'https://loja.infinitepay.io/violaocatolico/fvd9543-e-book-musicas-que-nos-marcaram',
    image: '10.png',
  },

  {
    title: 'Músicas católicas para as crianças',
    link: 'https://loja.infinitepay.io/violaocatolico/qrl3312-e-book-musicas-infantis',
    image: '11.png',
  },
]

const SectionStyle = styled.section`
  width: 100%;
  min-height: 90vh;
  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    min-height: fit-content;
  }

  background-color: ${ Colors.dark };
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: ${Sizes.mediaQueryBreak4}) {
    padding-bottom: 50px;
  }

  & .ebooksList {
    width: 80%;
    @media (max-width: ${Sizes.mediaQueryBreak2}) {
      width: 100%;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  & > h3 {
    width: 40%;
    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      width: 90%;
    }

    text-align: center;
    color: ${ Colors.white };
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: ${ Sizes.bigFontSize4};
    font-weight: normal;
  }

  & .btnYellow {
    margin: 30px;
    font-size: 15px;
    padding: 10px;

    @media (min-width: ${Sizes.mediaQueryBreak2}) {
      width: 300px;
      line-height: 30px;
    }

  & .btnCream {
    background: white2;
    margin: 30px;
    text-align: center;
    font-size: ${ Sizes.bigFontSize2};
    padding: 15px;
   
    @media (min-width: ${Sizes.mediaQueryBreak2}) {
      width: 300px;
      line-height: 30px;
    }
  }
}

& .digitalFilesText {
    color: white;
    font-size: 15px;
    position: absolute;
    right: 120px;
    bottom: 100px;

    @media (max-width: ${Sizes.mediaQueryBreak1}) {
      right: 10px;
      bottom: 10px;
    }
}
`;

const EbookStyle = styled.a`
  transition: transform .1s;
  background-color: ${ Colors.dark };
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 190px;
  margin: 15px;
  background-image: ${ props => `url(ebooks/${props.backgroundImage})` };
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;

  &:hover {
    transform: scale(1.2);
  }

  & h2 {
    font-size: ${ Sizes.bigFontSize2};
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
        <h3 className='fontTitle'>Se preferir, pode adquirir o seu preferido <span className='yellow'>individualmente</span></h3>

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

        <br /><br /><br />
        <RoundedYellowButton onClick={(e) => {
          e.preventDefault();
          props.setModalShow(true);
        }} className="btnCream" href="#">
          Confira as músicas disponíveis AQUI
        </RoundedYellowButton>

        <p className='digitalFilesText'>
          *arquivos digitais
        </p>

        <ModalStyle modalShow={props.modalShow} onClick={() => props.setModalShow(false)}>
          <button className='btn-close-modal' onClick={(e) => e.preventDefault()}>X</button>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            {
              Array.from({length: 32},(_, x) => {
                return <img key={x} src={`ebooks/sumario/${x + 1}.jpg`} alt={`Sumário página ${x + 1}`} />
              })
            }
          </div>
        </ModalStyle>
    </SectionStyle>
  );
}

export default Section;
