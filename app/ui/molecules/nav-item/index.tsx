import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/ui/atoms/tooltip";

export type NavItemProps = {
  label: string;
  content: string;
  icon?: React.ReactNode,
  href: string;
}

export const NavItem = ({ label, content, href, icon }: NavItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <NavLink
          to={href}
          className={({ isActive }) => clsx("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8", {
            '!text-foreground': isActive
          })}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </NavLink>
      </TooltipTrigger>
      <TooltipContent side="right">{content}</TooltipContent>
    </Tooltip>
  );
}