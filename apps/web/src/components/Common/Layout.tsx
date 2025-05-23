import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import GlobalModals from '../Shared/GlobalModals';

const Layout = () => {
  return (
    <>
      <GlobalModals />
      <div className="mx-auto flex w-full max-w-6xl items-start gap-x-8 px-0 md:px-5">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
