import { useCallback, useState } from 'react';
import Button from './Button';

/* eslint-disable @typescript-eslint/no-explicit-any */
const Count = ({ text }: any) => {
  console.log(`Rendering ${text}`);

  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  const handleIncrement = useCallback(() => {
    if (text === 'Age') {
      setAge(age + 1);
    } else {
      setSalary(salary + 1000);
    }
  }, [age, salary, text]);

  return (
    <div>
      <div>
        {text} - {age}
      </div>
      <Button onClick={handleIncrement}>{`Increment ${text}`}</Button>
    </div>
  );
};

export default Count;
