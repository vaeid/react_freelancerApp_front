import React from 'react';
import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className='flex flex-col gap-y-4 pt-4 px-2'>
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
          (isActive ? 'text-primary-500 bg-primary-200/15 border-2' : 'text-secondary-600') +
          ' flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 p-2 rounded-lg  transition-all duration-300'
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
