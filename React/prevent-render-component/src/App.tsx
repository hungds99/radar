// components

import Count from './components/Count';
import Title from './components/Title';

export default function PreventRender() {
  return (
    <div className='App'>
      <Title />
      <Count text='Age' />
      <br /> <br />
      <Count text='Salary' />
    </div>
  );
}
