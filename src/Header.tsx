import React from 'react';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';
import cssVariables from './style/variables.json';
import { Link } from 'react-router-dom';


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
  & nav span {
    padding-right: 0.5em;
  }
`;


function Header() {
  return (
    <HeaderTag>
        <h2>{ title }</h2>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
          <nav>
            <span>MENU:</span>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/other">Other</Link></span>
          </nav>
    </HeaderTag>
  );
}

export default Header;
