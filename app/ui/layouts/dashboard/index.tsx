import { BuildingStorefrontIcon, ChartBarSquareIcon } from '@heroicons/react/20/solid';
import { Link, Outlet } from '@remix-run/react';
import { Krabuu } from '~/ui/atoms/krabuu';

export const Dashboard = () => {
  return (
    <div className="grid h-full w-full grid-cols-[240px_minmax(100%,_1fr)_128px]">
      <div className="flex flex-col border-r-[1px] border-r-gray-200">
        <Krabuu className="py-2 px-4 pt-4" size="large" isLink />

        <ul className="mt-6 flex flex-col">
          <li className="inline-flex items-center py-2 px-4 text-gray-800 hover:text-indigo-600">
            <BuildingStorefrontIcon className="mr-4 h-4 w-4" />
            <Link to="/dashboard/products">Products</Link>
          </li>
          <li className="inline-flex items-center py-2 px-4 text-gray-800 hover:text-indigo-600">
            <ChartBarSquareIcon className="mr-4 h-4 w-4" />
            <Link to="/dashboard/orders">Orders</Link>
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
