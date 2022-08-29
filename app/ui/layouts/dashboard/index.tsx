import { BuildingStorefrontIcon, ChartBarSquareIcon } from '@heroicons/react/20/solid';
import { Outlet } from '@remix-run/react';
import { Krabuu } from '~/ui/atoms/krabuu';
import { Routes, SidebarItem } from '~/ui/atoms/sidebar-item';

export const Dashboard = () => {
  return (
    <div className="grid h-full w-full grid-cols-[200px_calc(100%-200px)]">
      <div className="flex grid-cols-1 flex-col border-r-[1px] border-r-gray-200">
        <Krabuu className="py-2 px-5 pt-4" size="large" isLink />

        <ul className="mt-6 flex flex-col space-y-2 px-4">
          <li>
            <SidebarItem to={Routes.Products} icon={<BuildingStorefrontIcon className="mr-4 h-4 w-4" />}>
              Products
            </SidebarItem>
          </li>
          <li>
            <SidebarItem to={Routes.Orders} icon={<ChartBarSquareIcon className="mr-4 h-4 w-4" />}>
              Orders
            </SidebarItem>
          </li>
        </ul>
      </div>

      <body className="grid grid-cols-1 grid-rows-[64px_minmax(900px,_1fr)] bg-slate-50">
        <Outlet />
      </body>
    </div>
  );
};
