import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNew = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p>
        <button class="btn btn-success">Latest</button>
      </p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          facere temporibus ab?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          facere temporibus ab?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          facere temporibus ab?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNew;
