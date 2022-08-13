import styled from 'styled-components'
import { Colors } from '../utils/colors'

 const DefaultSection = styled.section`
  width: 100%;
  min-height: 90vh;  
`;

const RoundedYellowButton = styled.a`
  background-color: ${Colors.yellow};
  color: white;
  text-decoration: underline;
  padding: 20px 40px;
  border-radius: 15px;
  width: fit-content;
  font-weight: bold;
`;

const RoundedWhiteButton = styled.a`
  background-color: ${Colors.white};
  padding: 20px 40px;
  border-radius: 15px;
  width: fit-content;
  font-weight: bold;
  color: ${Colors.yellow};
`;

export {
    DefaultSection,
    RoundedYellowButton,
    RoundedWhiteButton
};