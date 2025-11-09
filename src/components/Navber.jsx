import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';
const Navber = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="flex gap-4 text-gray-300">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>career</NavLink>
      </div>
      <div className="flex gap-5">
        <img src={user} alt="" />
        <button className="bg-[#403f3f] px-10">login</button>
      </div>
    </div>
  );
};

export default Navber;
