import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activestyle>
            Home
          </MenuLink>
          <MenuLink to="/todo" activestyle>
            To Do List
          </MenuLink>
          <MenuLink to="/mousetracker" activestyle>
            MouseTracker
          </MenuLink>
          <MenuLink to="/apis" activestyle>
            Using API's
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar