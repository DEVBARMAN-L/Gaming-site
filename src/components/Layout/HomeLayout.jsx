import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNew from '../LatestNew';
import Navber from '../Navber';
import LeftAside from '../homelayout/LeftAside';
import RightAsaid from '../homelayout/RightAsaid';

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto my-3">
        <LatestNew></LatestNew>
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto my-3 *:border grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAsaid></RightAsaid>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
