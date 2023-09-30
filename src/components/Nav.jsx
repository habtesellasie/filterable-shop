import React from 'react';
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from 'react-icons/ai';

const Nav = ({ handleInputChange }) => {
  return (
    <nav>
      <div className='nav-container'>
        <input
          type='text'
          className='search-input'
          onChange={handleInputChange}
          placeholder='Enter your search shoes.'
        />
      </div>
      <div className='profile-container'>
        <a href=''>
          <AiFillHeart className='nav-icons' />
        </a>
        <a href=''>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href=''>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
