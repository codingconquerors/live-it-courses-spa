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
        <br></br>
        <br></br>
        <br></br>
        <p className={`text-gray-600`}>
          Please note that we also provide online training to Computer Science
          and IT students through live classes and interactive sessions. We also
          help IT students in creating projects. To know more about this please
          click on the following link
          <br></br>
          <a
            href="https://www.liveitcourses.com"
            target="_blank"
            rel="noreferrer"
          >
            https://www.liveitcourses.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Main;
