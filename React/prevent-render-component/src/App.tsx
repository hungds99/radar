import { useCallback, useState } from 'react';

import Button from './components/Button';
import Count from './components/Count';
import Title from './components/Title';

export default function PreventRender() {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]); // dependency array, re-create this function only when `age` changes

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]); // re-create this function only when `salary` changes

  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <Title />
      <Count text='Age' count={age} />
      <Button onClick={incrementAge}>Increment Age</Button>
      <br /> <br />
      <Count text='Salary' count={salary} />
      <Button onClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
