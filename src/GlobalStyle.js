// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { Colors } from './app/utils/colors';
 
const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  ${(props) => {
    if (props.modalShow) {
      return `body, html { overflow: hidden; position:relative; }`;
    }
  }};

  @font-face {
    font-family: 'Parisienne';
    src: url('fonts/Parisienne/Parisienne-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT_Serif';
    src: url('fonts/PT_Serif/PTSerif-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  .fontCoursive {
    font-family: 'Parisienne', sans-serif;
  }

  .fontTitle, .fontTitle * {
    font-family: 'PT_Serif', sans-serif;
    font-weight: lighter;
  }

  .yellow { color: ${Colors.yellow}; }
  .white { color: ${Colors.white}; }
`;
 
export default GlobalStyle;