/* eslint-disable @typescript-eslint/no-explicit-any */

import { memo } from 'react';

const Count = ({ text, count }: any) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text}: {count}
    </div>
  );
};

export default memo(Count);
