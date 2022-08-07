import React from 'react';
import { Link } from 'react-router-dom';

const NavBarKategoryLane = (props) => {
  const categories = props.categories; // Listelenmesini istediğimiz rakam
  const totalItemNumber =
    Object.keys(categories).length >= 10 ? 10 : categories.length;

  // Kategoriler oluşturuluyor
  const categoriesList = [];
  for (let i = 0; i < totalItemNumber; i++) {
    categoriesList.push(
      <li key={i} className='content-list-items'>
        <Link to={'/' + Object.keys(categories)[i]}>
          {Object.values(categories)[i]}
        </Link>
      </li>
    );
  }
  return (
    <div className=' header-category'>
      <div className='container'>
        <div className='content'>
          <div>
            <svg
              width='24'
              height='16'
              viewBox='0 0 24 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z'
                fill='black'
              />
            </svg>
          </div>
          <ul className='content-list'>{categoriesList}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarKategoryLane;
