import AppLayout from '../../ui/AppLayout';
import NavItem from '../../ui/NavItem';
import Sidebar from '../../ui/Sidebar';
import { HiCollection, HiHome } from 'react-icons/hi';

export default function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavItem to='/owner/dashboard'>
          <HiHome />
          <span>داشبورد</span>
        </NavItem>
        <NavItem to='/owner/projects'>
          <HiCollection />
          <span>پروژه ها</span>
        </NavItem>
      </Sidebar>
    </AppLayout>
  );
}
