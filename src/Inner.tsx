import React from 'react';
import './hello';
import Data from './data.json';

const text = Data.data.footer.text;



function Inner() {
  return (
    <div className="inner">        
        <section className="inner__sec">
            <h2 className="inner__title">CSS（文字色）</h2>
            <p className="inner__text">CSSでタイトルの文字色変更。</p>
        </section>
        <section className="inner__sec">
            <h2 className="inner__title">JS（文字列）</h2>
            <p className="inner__text">JSでテキストの文字列追加→「<span className='inner__text--hello'></span>」</p>
        </section>
    </div>
  );
}

export default Inner;
