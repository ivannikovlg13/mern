import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto px-5">
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  );
};
