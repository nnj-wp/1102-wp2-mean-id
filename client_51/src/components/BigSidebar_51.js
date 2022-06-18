import React from 'react';
import { useAppContext } from '../context/appContext_51';
import NavLinks from './NavLinks_51';
import Logo from './Logo_51';
import Wrapper from '../assets/wrappers/BigSidebar_51';

const BigSidebar_xx = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_xx;
