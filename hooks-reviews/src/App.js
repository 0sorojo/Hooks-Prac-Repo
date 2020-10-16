import React from 'react';
import Review from './Review';
import { FaGithubAlt } from 'react-icons/fa';

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <FaGithubAlt className='icon' />
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
