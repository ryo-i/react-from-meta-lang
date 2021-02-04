import React from 'react';
import {Helmet} from "react-helmet";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Data from './data.json';

const titleText = Data.data.header.title;
const descriptionText = Data.data.header.text;

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
