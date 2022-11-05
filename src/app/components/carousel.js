import React, { useState, useLayoutEffect, useRef } from "react";
import styled from 'styled-components';


const PageExample = styled.div`
  width: 500px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: aquamarine;
`;

const SlidersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: orange;
  overflow: hidden;
  position: relative;
  height: 250px;
`;

const SlidersTrack = styled.div`
  display: flex;
  width: 100%;
  background-color: tomato;
  overflow: visible;
  position: absolute;
  transition: left .5s;

  
  /* Mover isso pra passar os slides */
  left: ${props => props.slidersTrackCssLeft}px;
`;

const SlidePage = styled.div`
  flex-shrink: 0;

  background-color: brown;
  width: ${props => props.pageSize}px;
  height: 200px;
  margin: ${props => props.marginSize}px ${props => props.marginSize}px;
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

  return (
    <PageExample>
      <Container>
        <ArrowLeft href="#" onClick={(e) => {
          e.preventDefault();
          setCurrentCenterPage(currentCenterPage - 1);
        }} />
        <SlidersContainer ref={slidersContainerRef}>
          <SlidersTrack slidersTrackCssLeft={getSlidersTrackCssLeft(currentCenterPage, (containerSize / 3))}>
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
            <SlidePage pageSize={pageSize} marginSize={marginSize} />
          </SlidersTrack>
        </SlidersContainer>
        <ArrowRight href="#" onClick={(e) => {
          e.preventDefault();
          setCurrentCenterPage(currentCenterPage + 1)
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