import React from 'react';
import styled from 'styled-components'
import DefaultSection from './DefaultSection';
import { Colors } from '../utils/colors'

const SectionStyle = styled(DefaultSection)`
  background-color: ${ Colors.black }
`;

function App() {

  return (
    <SectionStyle>
        section 2
    </SectionStyle>
  );
}

export default App;
