import { useState } from 'react';

import Button from './components/Button';
import Count from './components/Count';
import Title from './components/Title';

export default function PreventRender() {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

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
