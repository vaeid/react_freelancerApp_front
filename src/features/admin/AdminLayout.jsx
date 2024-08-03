import AppLayout from '../../ui/AppLayout';
import NavItem from '../../ui/NavItem';
import Sidebar from '../../ui/Sidebar';
import { HiCollection, HiHome, HiUsers, HiViewGrid } from 'react-icons/hi';

export default function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavItem to='dashboard'>
          <HiHome />
          <span> داشبورد (ادمین)</span>
        </NavItem>
        <NavItem to='users'>
          <HiUsers />
          <span>کاربران</span>
        </NavItem>
        <NavItem to='proposals'>
          <HiCollection />
          <span>درخواست ها</span>
        </NavItem>
        <NavItem to='projects'>
          <HiViewGrid />
          <span>پروژه ها</span>
        </NavItem>
      </Sidebar>
    </AppLayout>
  );
}
