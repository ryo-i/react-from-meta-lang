import React from 'react';
import Inner from './Inner';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';

const title = Data.data.main.title;
const text = Data.data.main.text;

const SectionTag = styled.section`
  ${pageSize}
  & h1 {
    font-size: 1.5em;
  }
`;

function Main() {
  return (
    <main>
      <SectionTag>
          <h1>{ title }</h1>
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
          <Inner />
      </SectionTag>
    </main>
  );
}

export default Main;
