// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
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
`;
 
export default GlobalStyle;