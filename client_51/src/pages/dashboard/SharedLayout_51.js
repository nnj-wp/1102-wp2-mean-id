import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_51, BigSidebar_51, SmallSidebar_51 } from '../../components';

const SharedLayout_xx = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar_51 />
        <BigSidebar_51 />
        <div>
          <Navbar_51 />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_xx;

/*
const SharedLayout_xx = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
