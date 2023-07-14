import BottomTabs from '@/components/bottomTabs';
import NavbarComponent from '@/components/navbar';
import { deviceSize } from '@/utils/device';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      {screen.width <= deviceSize.tablet && <BottomTabs />}
    </>
  );
};

export default RootLayout;
