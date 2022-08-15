import styled from 'styled-components'
import { Colors } from '../utils/colors'

const RoundedYellowButton = styled.a`
  background-color: ${Colors.yellow};
  color: white;
  text-decoration: underline;
  padding: 20px 40px;
  border-radius: 15px;
  width: fit-content;
  font-weight: bold;
  text-align: center;
`;

const RoundedWhiteButton = styled.a`
  background-color: ${Colors.white};
  padding: 20px 40px;
  border-radius: 15px;
  width: fit-content;
  font-weight: bold;
  color: ${Colors.yellow};
  text-align: center;
`;

export {
    RoundedYellowButton,
    RoundedWhiteButton
};