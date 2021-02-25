import React from 'react';
import { hello } from './modules/hello/hello';
import Data from './data/data.json';
import styled from 'styled-components';
import cssVariables from './style/variables.json';


const variable = cssVariables.variable;
const innerJson = Data.data.inner;


const SectionTag = styled.section`
  & h2 {
    font-size: 1.25em;
    color: ${variable.baseColor};
  }
`;


function Inner() {
  // modules
  hello();

  return (
    <div className="inner">
      {innerJson.map((innerJson, index) =>
        <SectionTag key={ index }>
          <h2>{ innerJson.title }</h2>
          <p dangerouslySetInnerHTML={{ __html: innerJson.text }}></p>
        </SectionTag>
      )}
    </div>
  );
}

export default Inner;
