import React from 'react';
import Inner from './Inner';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';
import {
  Switch,
  Route
} from 'react-router-dom';


const mainTitle = Data.data.main.title;
const mainText = Data.data.main.text;
const otherTitle = Data.data.other.title;
const otherText = Data.data.other.text;
const homeUrl = process.env.PUBLIC_URL;


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
        <Switch>
          <Route exact path={ homeUrl + "/" }>
            <h1>{ mainTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: mainText }}></p>
            <Inner />
          </Route>
          <Route path={ homeUrl + "/other" }>
            <h1>{ otherTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: otherText }}></p>
          </Route>
        </Switch>
      </SectionTag>
    </main>
  );
}

export default Main;
