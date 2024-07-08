import React from 'react';
import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className='flex flex-col gap-y-4 pt-4'>
      <NavItem to='/owner/dashboard'>
        <HiCollection />
        <span>داشبورد</span>
      </NavItem>
      <NavItem to='/owner/projects'>
        <HiCollection />
        <span>پروژه ها</span>
      </NavItem>
    </ul>
  );
}

function NavItem({ children, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          (isActive ? 'text-primary-600 bg-primary-100' : '') +
          ' flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 p-2 rounded-lg text-secondary-600 transition-all duration-300'
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
