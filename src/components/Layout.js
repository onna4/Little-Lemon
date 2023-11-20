import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'

function Layout() {
  return (
    <>
      <div className='heading'>
        <Header />
        <Nav />
      </div>
      <Outlet />
    </>
  );
}

export default Layout
