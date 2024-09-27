import { Component, HomeIcon, Package, Settings } from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "./NavBar";
import Link from "next/link";

const data = [
  {
    title: "Главная",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/user/baha",
  },
  {
    title: "Курсы",
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/user/baha/courses",
  },
  {
    title: "Мои курсы",
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/user/baha/my-courses",
  },
  {
    title: "Настройки",
    icon: (
      <Settings className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/user/baha/settings",
  },
];

export const AppleStyleDock = () => {
  return (
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};
