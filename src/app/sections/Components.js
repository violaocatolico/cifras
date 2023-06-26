import styled from 'styled-components'
import { Colors } from '../utils/colors'

const RoundedYellowButton = styled.a`
  transition: transform .1s;  
  background-color: ${Colors.yellow};
  
  color: black;
  text-decoration: underline;
  padding: 20px 40px;
  border-radius: 45px;
  width: fit-content;
  font-weight: bold;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

`;

const RoundedCreamButton = styled.a`
  transition: transform .1s;  
  background-color: ${Colors.white2};
  color: black;
  text-decoration: none;
  padding: 20px 20px;
  border-radius: 45px;
  width: 280px;
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

const RoundedBlackButton = styled.a`
  transition: transform .1s;  
  background-color: ${Colors.black};
  
  color: white;
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 45px;
  width: fit-content;
  font-weight: bold;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

`;

const RoundedYellowEuQueroButton = styled.a`
  transition: transform .1s;  
  background-color: ${Colors.yellow};
  color: black;
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 45px;
  width: 50%;
  font-weight: bold;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export {
    RoundedYellowButton,
    RoundedCreamButton,
    RoundedWhiteButton,
    RoundedBlackButton,
    RoundedYellowEuQueroButton
};