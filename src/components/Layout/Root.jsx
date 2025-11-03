import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navber from '../Header/Navber';

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
