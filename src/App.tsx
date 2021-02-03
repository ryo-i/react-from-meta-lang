import React from 'react';
import {Helmet} from "react-helmet";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const titleText = 'Reactとメタ言語の比較';
const descriptionText = '以前作ったメタ言語スターターキットの内容をReact環境で再現してみる';

function App() {
  return (
    <div className="App">
        <Helmet
            title={ titleText }
            meta={[
                { name: 'description', content: descriptionText }
            ]}
         />
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
