import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import styled from 'styled-components';

const height = 300;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SlidersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${() => height}px;
  
  /* Debug: visible, valor correto: hidden */
  overflow: hidden;
  position: relative;
`;

const SlidersTrack = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  position: absolute;
`;

const SlidePage = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  /* background-color: brown; */
  width: ${props => props.pageSize}px;
  height: 100%;
  margin: ${props => props.marginSize}px ${props => props.marginSize}px;
  transition: left 0.5s, opacity 0.1s;

  & > * {
    background-size: 80%;
    transition: background-size 0.5s;
  }

  &.currentCenterPage > * {
    background-size: 100%;
  }

  /* Altera a posição */
  left: ${props => props.pageCss.left}px;
  opacity: ${props => props.pageCss.opacity};
  position: absolute;
`;

const Arrow = styled.a`
  z-index: 99;
  width: 50px;
  height: ${() => height}px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ArrowLeft = styled(Arrow)`
  background-image: url('arrow-left.png');
`;

const ArrowRight = styled(Arrow)`
  background-image: url('arrow-right.png');
`;

const Carousel = (props) => {
  const array = props.itemsList;

  const slidersContainerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const [dimensions, setDimensions] = useState({
    containerWidth: 0, 
    containerHeight: 0
  });

  const handleResize = () => {
    setDimensions({
      containerWidth: slidersContainerRef.current.clientWidth,
      containerHeight: slidersContainerRef.current.clientHeight,
    });
  }

  const containerSize = dimensions.containerWidth;
  
  // Alterar multiplicador para ajustar tamanho da margem
  const marginSize = containerSize * 0;
  const pageSize = (containerSize / 3) - (marginSize * 2);

  const goToNext = useCallback(() => {
    if (currentPage === array.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }, [setCurrentPage, array, currentPage]);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);

    if (autoPlay) {
      const interval = setInterval(() => {
        goToNext();
      }, 2000);
      return () => clearInterval(interval);
    }

  }, [autoPlay, goToNext]);

  return (
    /*<PageExample>*/
    <Container>
      <ArrowLeft href="#" onClick={(e) => {
        e.preventDefault();
        setAutoPlay(false);

        if (currentPage === 0) {
          setCurrentPage(array.length -1);
        } else {
          setCurrentPage(currentPage - 1);
        }

      }} />
      <SlidersContainer ref={slidersContainerRef} dimensions={dimensions}>
        <SlidersTrack>
          {array.map((item, index) => (
            <SlidePage 
              className={getClassName(index, currentPage)} 
              pageCss={pageCss(index, currentPage, (containerSize / 3), array.length)} 
              key={index} 
              pageSize={pageSize} 
              marginSize={marginSize}
            >
                {array[index]}
            </SlidePage>
          ))}
        </SlidersTrack>
      </SlidersContainer>
      <ArrowRight 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          setAutoPlay(false);
          goToNext();
        }} 
      />
      {/* Debug `currentPage: ${currentPage}` */}
    </Container>
    /* </PageExample> */
  );
}

let rotateLeft = (array) => {   
  let result = [...array.slice(1, array.length), array[0]];
  return result;
}

let rotateRight = (array) => {   
  let result = [array[array.length -1], ...array.slice(0, array.length -1)];
  return result;
}

const getPosition = (currentPage, totalItems, thisPage) => {  
  let tmpArray = Array.from(Array(totalItems).keys());
  
  // Começa rotacionado tres vezes pra direita
  tmpArray = rotateRight(tmpArray);
  tmpArray = rotateRight(tmpArray);
  tmpArray = rotateRight(tmpArray);

  for (let i = 0; i < currentPage; i++) {
    tmpArray = rotateLeft(tmpArray);
  }

  let resultPosition;
  for (let i = 0; i < tmpArray.length; i++) {
    if (tmpArray[i] === thisPage) {
      resultPosition = i;
      break;
    }
  }

  // Debug
  /*console.log(`currentPage: ${currentPage}, thisPage: ${thisPage}, pos: ${resultPosition}`);*/
  return resultPosition;
}

const getLeftByPosition = (position, pageSize) => {
  return (pageSize * position) - (pageSize * 2);
}

const pageCss = (thisPage, currentPage, pageSizePx, totalItems) => {

  let position = getPosition(currentPage, totalItems, thisPage);
  let left = getLeftByPosition(position, pageSizePx);

  let opacityTransparent = 0; //Debug: 0.5;
  return {
    left: left,
    opacity: (position === 0 || position === totalItems -1) ? opacityTransparent : 1
  };
}

const getClassName = (position, currentPage) => {
  if (position === currentPage) {
    return 'currentCenterPage';
  }
}

export default Carousel;