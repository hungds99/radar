import { memo } from 'react';

const Title = () => {
  console.log('Rendering Title');
  return <h1>Optimize React Rendering</h1>;
};

export default memo(Title);
