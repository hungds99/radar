import { memo } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ onClick, children }: any) => {
  console.log(`Rendering button - `, children);

  return (
    <button type='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
