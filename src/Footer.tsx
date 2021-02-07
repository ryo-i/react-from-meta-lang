import React from 'react';
import Data from './data.json';

const text = Data.data.footer.text;

function Footer() {
  return (
    <footer className="footer">
        <p className="footer__text" dangerouslySetInnerHTML={{ __html: text }}></p>
    </footer>
  );
}

export default Footer;
