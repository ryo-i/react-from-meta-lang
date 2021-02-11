import React from 'react';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';
import cssVariables from './style/variables.json';

const variable = cssVariables.variable;
const title = Data.data.header.title;
const text = Data.data.header.text;

const HeaderTag = styled.header`
  ${pageSize}
  text-align: center;
  background: ${variable.bgColor_g};
  padding: 20px;
  & h2 {
    font-size: 2em;
  }
`;

function Header() {
  return (
    <HeaderTag>
        <h2>{ title }</h2>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </HeaderTag>
  );
}

export default Header;
