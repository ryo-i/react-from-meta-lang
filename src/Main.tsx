import React from 'react';
import Inner from './Inner';
import Data from './data.json';

const title = Data.data.main.title;
const text = Data.data.main.text;


function Main() {
  return (
    <main>
      <section className="main">
          <h1 className="main__title">{ title }</h1>
          <p className="main__title" dangerouslySetInnerHTML={{ __html: text }}></p>
          <Inner />
      </section>
    </main>
  );
}

export default Main;
