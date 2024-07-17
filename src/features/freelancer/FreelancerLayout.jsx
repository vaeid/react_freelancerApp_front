import AppLayout from '../../ui/AppLayout';
import NavItem from '../../ui/NavItem';
import Sidebar from '../../ui/Sidebar';
import { HiCollection, HiHome, HiViewGrid } from 'react-icons/hi';

export default function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavItem to='dashboard'>
          <HiHome />
          <span> داشبورد (فریلنسر)</span>
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
