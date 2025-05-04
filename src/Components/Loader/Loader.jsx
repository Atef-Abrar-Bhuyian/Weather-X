import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-40 shadow-inner">
      <PropagateLoader color="#22c55e" size={15} />
    </div>
  );
};

export default Loader;
