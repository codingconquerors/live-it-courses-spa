import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { main } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-99 md:h-96 lg:w-full lg:h-full"
        src={main.img}
        alt="Online IT courses with live classes"
      />
    </div>
  );
};

export default MainHeroImage;
