import React from 'react';
import Data from './data.json';

const title = Data.data.header.title;
const text = Data.data.header.text;

function Header() {
  return (
    <header className="header">
        <h1 className="header__title">{ title }</h1>
        <p className="header__text" dangerouslySetInnerHTML={{ __html: text }}></p>
    </header>
  );
}

export default Header;
