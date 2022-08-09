import React from 'react';
import styled from 'styled-components'
import DefaultSection from './DefaultSection';
import { Colors } from '../utils/colors'

const SectionStyle = styled(DefaultSection)`
  background-color: ${ Colors.yellow }
`;

function App() {

  return (
    <SectionStyle>
        section 5
    </SectionStyle>
  );
}

export default App;
