import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Button from './Button';

const Center = ({ people }) => {
  const [index, setIndex] = useState(0);

  const setPrev = () => {
    return setIndex(index - 1);
  };

  const setNext = () => {
    return setIndex(index + 1);
  };

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className='section-center'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }

        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide';
        }

        return (
          <article className={position} key='id'>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <Button setPrev={setPrev} setNext={setNext} />
    </div>
  );
};

export default Center;
