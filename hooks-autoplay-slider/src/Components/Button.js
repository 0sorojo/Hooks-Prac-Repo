import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Button = ({ setPrev, setNext }) => {
  return (
    <div>
      <button className='prev' onClick={setPrev}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={setNext}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Button;
