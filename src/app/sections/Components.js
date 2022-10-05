import styled from 'styled-components'
import { Colors } from '../utils/colors'

const RoundedYellowButton = styled.a`
  transition: transform .1s;  
  background-color: ${Colors.yellow};
  color: white;
  text-decoration: underline;
  padding: 20px 40px;
  border-radius: 15px;
  width: fit-content;
  font-weight: bold;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

`;

const RoundedWhiteButton = styled.a`
  transition: transform .1s;
  background-color: ${Colors.white};
  padding: 20px 40px;
  border-radius: 15px;
  width: fit-content;
  font-weight: bold;
  color: ${Colors.yellow};
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export {
    RoundedYellowButton,
    RoundedWhiteButton
};