import FooterComponent from '@/components/footer';
import NavbarComponent from '@/components/navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default RootLayout;
