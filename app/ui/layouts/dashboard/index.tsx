import { BuildingStorefrontIcon } from '@heroicons/react/20/solid';
import { Outlet } from '@remix-run/react';
import { Krabuu } from '~/ui/atoms/krabuu';
import { Routes, SidebarItem } from '~/ui/atoms/sidebar-item';

export const Dashboard = () => {
  return (
    <div className="grid h-full w-full grid-cols-[320px_1fr]">
      <div className="border-r-[1px] border-r-gray-200 py-8">
        <Krabuu className="py-2 px-5 pt-4" size="large" isLink />

        <ul className="mt-6 flex flex-col space-y-2 px-4">
          <li>
            <SidebarItem to={Routes.Products} icon={<BuildingStorefrontIcon className="mr-4 h-6 w-6" />}>
              Products
            </SidebarItem>
          </li>
        </ul>
      </div>

      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
};
