import React from 'react';
import styled from 'styled-components'
import { Colors } from '../utils/colors'

const FooterStyle = styled.div`
  background-color: ${ Colors.dark };
  height: 70px;
  display: flex;
  justify-content: flex-end;
  & a {
    color: white;
    text-decoration: none;
  }
`;

const Footer = () => {

  return (
    <FooterStyle>
    </FooterStyle>
  );
}

export default Footer;