import React from 'react';
import './hello';
import Data from './data.json';

const innerJson = Data.data.inner;

function Inner() {
  return (
    <div className="inner">
      {innerJson.map((innerJson, index) => 
        <section key={ index }>
          <h2 className="inner__title">{ innerJson.title }</h2>
          <p className="inner__text" dangerouslySetInnerHTML={{ __html: innerJson.text }}></p>
        </section>
      )}
    </div>
  );
}

export default Inner;
