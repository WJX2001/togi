import { Outlet } from 'react-router'
import Navbar from '../Shared/Navbar'

const Layout = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl items-start gap-x-8 px-0 md:px-5">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
