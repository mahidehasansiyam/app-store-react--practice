import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;