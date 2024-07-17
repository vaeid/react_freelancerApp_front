import AppLayout from '../../ui/AppLayout';
import NavItem from '../../ui/NavItem';
import Sidebar from '../../ui/Sidebar';
import { HiHome, HiViewGrid } from 'react-icons/hi';

export default function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavItem to='dashboard'>
          <HiHome />
          <span>داشبورد (کارفرما)</span>
        </NavItem>
        <NavItem to='projects'>
          <HiViewGrid />
          <span>پروژه ها</span>
        </NavItem>
      </Sidebar>
    </AppLayout>
  );
}
