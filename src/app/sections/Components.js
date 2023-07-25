import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Sizes } from '../utils/sizes';

const RoundedYellowButton = styled.a`
  transition: transform .1s;  
  background-color: ${Colors.yellow};
  
  color: ${ Colors.dark };
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
  color: ${ Colors.dark };
  text-decoration: none;
  padding: 20px 20px;
  border-radius: 45px;
  font-weight: bold;
  text-align: center;

  @media (max-width: ${Sizes.mediaQueryBreak4}) {
    width: 70%;
  }

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
  background-color: ${Colors.dark};
  
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
  color: ${ Colors.dark };
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 45px;
  width: 30%;

  @media (max-width: ${Sizes.mediaQueryBreak2}) {
    width: 50%;
  }

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