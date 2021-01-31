import React from 'react';

function Main() {
  return (
    <main>
      <section className="main">
          <h1 className="main__title">タイトルです</h1>
          <p className="main__title">テキストです。テキストです。テキストですったらテキストです。</p>
          <section className="inner">
              <h2 className="inner__title">CSS（文字色）</h2>
              <p className="inner__text">CSSでタイトルの文字色変更。</p>
          </section>
          <section className="inner">
              <h2 className="inner__title">JS（文字列）</h2>
              <p className="inner__text">JSでテキストの文字列追加→「<span className='inner__text--hello'></span>」</p>
          </section>
      </section>
    </main>
  );
}

export default Main;
