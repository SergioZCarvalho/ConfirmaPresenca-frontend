import InviteConfirm from '@/components/InviteConfirm';
import BottomTabs from '@/components/bottomTabs';
import FooterComponent from '@/components/footer';
import NavbarComponent from '@/components/navbar';
import { deviceSize } from '@/utils/device';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      {screen.width <= deviceSize.tablet && <BottomTabs />}
      <InviteConfirm />
      <FooterComponent />
    </>
  );
};

export default RootLayout;
