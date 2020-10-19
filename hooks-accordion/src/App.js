import React, { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <section className='container'>
        <h3>Log In Questions and Answers</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </section>
    </>
  );
};

export default App;
