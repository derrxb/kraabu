import { Link, Outlet } from '@remix-run/react';
import { Krabuu } from '~/ui/atoms/krabuu';

export const Dashboard = () => {
  return (
    <div className="grid h-full w-full grid-cols-[240px_minmax(100%,_1fr)_128px]">
      <div className="flex flex-col border-r-[1px] border-r-gray-200">
        <Krabuu size="medium" isLink />

        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </div>

      <div className="grid grid-rows-[64px_minmax(900px,_1fr)_100px]">
        <nav className="border-b-[1px] border-b-gray-200 bg-white shadow-sm"></nav>
        <body className="bg-slate-50">
          <Outlet />
        </body>
      </div>
    </div>
  );
};
