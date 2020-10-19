import React, { useState } from 'react';
import Center from './Components/Center';
import Title from './Components/Title';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className='section'>
        <Title />
        <Center people={people} />
      </section>
    </>
  );
};

export default App;
