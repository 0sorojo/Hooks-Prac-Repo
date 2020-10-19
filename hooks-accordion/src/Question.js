import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
  const { title, info } = props;

  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {!showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;