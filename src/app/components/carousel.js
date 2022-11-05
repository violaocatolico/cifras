import React, { useState, useLayoutEffect, useRef } from "react";
import styled from 'styled-components';


const PageExample = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  border: solid 1px black;
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
  transition: left .5s;
  
  /* Altera a posição do sliders tracker */
  left: ${props => props.slidersTrackCssLeft}px;
`;

const SlidePage = styled.div`
  flex-shrink: 0;

  background-color: brown;
  width: ${props => props.pageSize}px;
  height: 80%;
  margin: ${props => props.marginSize}px ${props => props.marginSize}px;
  transition: height .5s;

  &.currentCenterPage {
    height: 100%;
  }
`;

const Arrow = styled.a`
  width: 50px;
  height: 50px;
  background-color: blue;
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
  const [currentCenterPage, setCurrentCenterPage] = useState(1);

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

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <PageExample>
      <Container>
        <ArrowLeft href="#" onClick={(e) => {
          e.preventDefault();
          setCurrentCenterPage(currentCenterPage - 1);
        }} />
        <SlidersContainer ref={slidersContainerRef} dimensions={dimensions}>
          <SlidersTrack slidersTrackCssLeft={getSlidersTrackCssLeft(currentCenterPage, (containerSize / 3))}>
            {
              array.map((el, index) => (
                <SlidePage 
                  className={index === currentCenterPage ? "currentCenterPage" : ""}
                  key={index}
                  pageSize={pageSize}
                  marginSize={marginSize}
                />
              ))
            }
          </SlidersTrack>
        </SlidersContainer>
        <ArrowRight href="#" onClick={(e) => {
          e.preventDefault();
          setCurrentCenterPage(currentCenterPage + 1);
        }} />
      </Container>
      
      <br /><br /><br /><br />
      {JSON.stringify(dimensions)}

      <br /><br />
      { `currentCenterPage: ${currentCenterPage}` }
    </PageExample>
  );
}

const getSlidersTrackCssLeft = (currentCenterPage, pageSize) => {
  return ((currentCenterPage * pageSize) * -1) + pageSize;
}

export default Carousel;