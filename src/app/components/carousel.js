import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SlidersContainer = styled.div`
  display: flex;
  width: ${props => props.containerSize}px;
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
  width: 100px;
  height: 100px;
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
  const containerSize = 800;
  const marginSize = 20;
  const pageSize = (containerSize / 3) - (marginSize * 2);

  return (
    <Container>
      <ArrowLeft href="#" />
      <SlidersContainer containerSize={containerSize}>
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />
        <SlidePage pageSize={pageSize} marginSize={marginSize} />      
      </SlidersContainer>
      <ArrowRight href="#" />
    </Container>
  );
}

export default Carousel;