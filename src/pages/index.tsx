import React from 'react';

import About from '../components/About';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import Main from '../components/Main';
import MainImage from '../components/MainImage';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <Main />
          </div>
        </div>
        <MainImage />
      </div>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
