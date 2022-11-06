import React, { useState, useLayoutEffect, useRef } from "react";
import styled from 'styled-components';

const shownItems = 3;
const animTime = 0.5;

const PageExample = styled.div`
  position: relative;
  margin: 0 300px;
  width: 800px;
  height: 400px;
  background-color: orange;
  font-size: 100px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SlidersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  
  /* trocar para hidden */
  overflow: visible;
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

  background-color: brown;
  width: ${props => props.pageSize}px;
  height: 80%;
  margin: ${props => props.marginSize}px ${props => props.marginSize}px;
  transition: height ${() => `${animTime}`}s, left ${() => `${animTime}`}s, opacity 0.5s;

  &.currentCenterPage {
    height: 100%;
  }

  /* Altera a posição */
  left: ${props => props.pageCss.left}px;
  opacity: ${props => props.pageCss.opacity};
  position: absolute;
`;

const Arrow = styled.a`
  z-index: 99;
  width: 50px;
  height: 50px;
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

const Carousel = () => {
  const slidersContainerRef = useRef(null);

  // Começa com a segunda página do array centralizada
  const [currentPage, setCurrentPage] = useState(0);

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

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  const containerSize = dimensions.containerWidth;
  const marginSize = containerSize * 0.02;
  const pageSize = (containerSize / 3) - (marginSize * 2);

  const [array, setArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <PageExample>
      <Container>
        <ArrowLeft href="#" onClick={(e) => {
          e.preventDefault();

          if (currentPage === 0) {
            setCurrentPage(array.length -1);
          } else {
            setCurrentPage(currentPage - 1);
          }

        }} />
        <SlidersContainer ref={slidersContainerRef} dimensions={dimensions}>
          <SlidersTrack>
            {array.map((item, index) => (
              <SlidePage className={getClassName(index, currentPage, array.length)} pageCss={pageCss(index, currentPage, (containerSize / 3))} key={index} pageSize={pageSize} marginSize={marginSize}>{array[index]}</SlidePage>
            ))}
          </SlidersTrack>
        </SlidersContainer>
        <ArrowRight href="#" onClick={(e) => {
          if (currentPage === array.length - 1) {
            setCurrentPage(0);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }} />
      </Container>

      
      { `currentPage: ${currentPage}` }

      
    </PageExample>
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
  
  // Começa rotacionado duas vezes pra direita
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

  /*console.log(`currentPage: ${currentPage}, thisPage: ${thisPage}, pos: ${resultPosition}`);*/
  return resultPosition;
}

const getLeftByPosition = (position, pageSize) => {
  return (pageSize * position) - pageSize;
}

const pageCss = (thisPage, currentPage, pageSize) => {
  const totalItems = 10;

  let position = getPosition(currentPage, totalItems, thisPage);
  let left = getLeftByPosition(position, pageSize);

  return {
    left: left,
    opacity: (position === 0 || position === 4) ? 0.5 : 1
  };
}

const getClassName = (position, currentPage, total) => {
  let calculatedPosition = (2 - currentPage);
  if (position === calculatedPosition) {
    return '';
    // return 'currentCenterPage';
  }
}

export default Carousel;