import React from 'react';
import './hello';
import Data from './data.json';

const innerJson = Data.data.inner;

function Inner() {
  return (
    <div className="inner">
      {innerJson.map((val) => 
        <section key={ val.toString() }>
          <h2 className="inner__title">{ val.title }</h2>
          <p className="inner__text" dangerouslySetInnerHTML={{ __html: val.text }}></p>
        </section>
      )}
    </div>
  );
}

export default Inner;
