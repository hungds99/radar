/* eslint-disable @typescript-eslint/no-explicit-any */

const Count = ({ text, count }: any) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text}: {count}
    </div>
  );
};

export default Count;
