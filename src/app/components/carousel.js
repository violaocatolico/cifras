import React, { useState, useLayoutEffect, useRef } from "react";
import styled from 'styled-components';

const shownItems = 3;
const animTime = 0.5;

const PageExample = styled.div`
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 200px;
  background-color: orange;
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
            setCurrentPage(4);
          } else {
            setCurrentPage(currentPage - 1);
          }

        }} />
        <SlidersContainer ref={slidersContainerRef} dimensions={dimensions}>
          <SlidersTrack>

            <SlidePage pageCss={pageCss(0, currentPage, (containerSize / 3))} key={0} pageSize={pageSize} marginSize={marginSize}>{array[0]}</SlidePage>
            <SlidePage pageCss={pageCss(1, currentPage, (containerSize / 3))} key={1} pageSize={pageSize} marginSize={marginSize}>{array[1]}</SlidePage>
            <SlidePage pageCss={pageCss(2, currentPage, (containerSize / 3))} key={2} pageSize={pageSize} marginSize={marginSize}>{array[2]}</SlidePage>
            <SlidePage pageCss={pageCss(3, currentPage, (containerSize / 3))} key={3} pageSize={pageSize} marginSize={marginSize}>{array[3]}</SlidePage>
            <SlidePage pageCss={pageCss(4, currentPage, (containerSize / 3))} key={4} pageSize={pageSize} marginSize={marginSize}>{array[4]}</SlidePage>


          </SlidersTrack>
        </SlidersContainer>
        <ArrowRight href="#" onClick={(e) => {
          e.preventDefault();

          if (currentPage === 4) {
            setCurrentPage(0);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }} />
      </Container>

      <br /><br />
      { `currentPage: ${currentPage}` }

      <br /><br />
      { `array: ${array}` }
      
    </PageExample>
  );
}

const getPosition = (currentPage, totalItems, thisPage) => {
  return (currentPage + totalItems + thisPage) % totalItems;
}

const getLeftByPosition = (position, pageSize) => {
  return (pageSize * position) - pageSize;
}

const pageCss = (thisPage, currentPage, pageSize) => {
  const leftRightAuxItems = 2;
  const totalItems = shownItems + leftRightAuxItems;

  let position = getPosition(currentPage, totalItems, thisPage);
  let left = getLeftByPosition(position, pageSize);

  return {
    left: left,
    opacity: (position === 0 || position === 4) ? 0.5 : 1
  };
}

export default Carousel;