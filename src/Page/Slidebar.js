import React from 'react';

function Sidebar({ categories, handleCategoryClick }) {
  return (
    <div className="sidebar">
      <h2 style={{fontFamily:"sans-serif"}}>Our Products</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <button onClick={() => handleCategoryClick(category.id)} className='btn'>
             <span className='slide-name'> {category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
