import React from 'react';

const Navbar = (props) => {
  const { title, logo } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {' '}
        <i className={logo}></i> {title}{' '}
      </h1>
    </nav>
  );
};

export default Navbar;
