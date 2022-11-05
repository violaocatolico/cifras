import React, { useState, useLayoutEffect, useRef } from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: aquamarine;
`;

const SlidersContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: orange;
  overflow: hidden;
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
  const ref = useRef(null);

  const [dimensions, setDimensions] = useState({
    containerWidth: 0, 
    containerHeight: 0
  });

  const handleResize = () => {
    setDimensions({
      containerWidth: ref.current.clientWidth,
      containerHeight: ref.current.clientHeight,
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
    <div>
    <Container>
      <ArrowLeft href="#" />
      <SlidersContainer ref={ref}>
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
      </SlidersContainer>
      <ArrowRight href="#" />
    </Container>
    <br /><br /><br /><br />
    {`---------${JSON.stringify(dimensions)}-------`}
    </div>
  );
}

export default Carousel;