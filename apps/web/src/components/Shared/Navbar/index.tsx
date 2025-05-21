
import { Link, useLocation } from 'react-router';
import { STATIC_IMAGES_URL } from '@togi/data/constants';
import Image from '../UI/Image';
import { usePreferencesStore } from '@/store/persisted/usePreferencesStore';
import {
  BellIcon as BellOutline,
  BookmarkIcon as BookmarkOutline,
  GlobeAltIcon as GlobeOutline,
  HomeIcon as HomeOutline,
  UserCircleIcon,
  UserGroupIcon as UserGroupOutline,
} from '@heroicons/react/24/outline';
import {
  BellIcon as BellSolid,
  BookmarkIcon as BookmarkSolid,
  GlobeAltIcon as GlobeSolid,
  HomeIcon as HomeSolid,
  UserGroupIcon as UserGroupSolid,
} from '@heroicons/react/24/solid';
import Tooltip from '../UI/Tooltip';
import { useAccountStore } from '@/store/persisted/useAccountStore';
import SignedAccount from './SignedAccount';

const navigationItems = {
  '/': {
    title: 'Home',
    solid: <HomeSolid className="size-6" />,
    outline: <HomeOutline className="size-6" />,
  },
  '/explore': {
    title: 'Explore',
    solid: <GlobeSolid className="size-6" />,
    outline: <GlobeOutline className="size-6" />,
  },
  '/notifications': {
    title: 'Notifications',
    solid: <BellSolid className="size-6" />,
    outline: <BellOutline className="size-6" />,
  },
  '/groups': {
    title: 'Groups',
    solid: <UserGroupSolid className="size-6" />,
    outline: <UserGroupOutline className="size-6" />,
  },
  '/bookmarks': {
    title: 'Bookmarks',
    solid: <BookmarkSolid className="size-6" />,
    outline: <BookmarkOutline className="size-6" />,
  },
};

const NavItem = ({ url, icon }: { url: string; icon: ReactNode }) => (
  <Tooltip content={navigationItems[url as keyof typeof navigationItems].title}>
    <Link to={url}>{icon}</Link>
  </Tooltip>
);
const NavItems = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { pathname } = useLocation();
  const routes = [
    '/',
    '/explore',
    ...(isLoggedIn ? ['/notifications', '/groups', '/bookmarks'] : []),
  ];

  return (
    <>
      {routes.map((route) => (
        <NavItem
          key={route}
          url={route}
          icon={
            pathname === route
              ? navigationItems[route as keyof typeof navigationItems].solid
              : navigationItems[route as keyof typeof navigationItems].outline
          }
        />
      ))}
    </>
  );
};

const Navbar = () => {
  const { currentAccount } = useAccountStore();
  const { appIcon } = usePreferencesStore();

  return (
    <aside className="sticky top-5 mt-5 hidden w-10 shrink-0 flex-col items-center gap-y-5 md:flex">
      <Link to="/" onClick={() => console.log(111)}>
        <Image
          alt="Logo"
          className="size-8"
          src={`${STATIC_IMAGES_URL}/app-icon/${appIcon}.png`}
          height={32}
          width={32}
        />
      </Link>
      <NavItems isLoggedIn={!!currentAccount} />
      <SignedAccount />
      {currentAccount ? (
        <SignedAccount />
      ) : (
        <button type="button">
          <UserCircleIcon className="size-6" />
        </button>
      )}
    </aside>
  );
};

export default Navbar;
