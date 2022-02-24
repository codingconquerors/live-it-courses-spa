import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Main = () => {
  const { main } = config;
  return (
    <section className={`bg-background py-8 `} id="main">
      <div className="container max-w-xl mx-auto m-8">
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {main.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <p className={`text-gray-600`} id="root">
          {main.description}
        </p>
      </div>
    </section>
  );
};

export default Main;
