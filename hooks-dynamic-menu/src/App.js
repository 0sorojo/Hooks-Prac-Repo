import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <section className='menu section'>
        <div className='title'>
          <h2>Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </>
  );
};

export default App;
