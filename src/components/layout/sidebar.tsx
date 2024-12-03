import {
  ChartPieIcon,
  PackageIcon,
  ScanBarcode,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { createElement } from "react";
import { cx } from "class-variance-authority";

type Props = {
  className?: string;
};

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: ChartPieIcon,
    key: "dashboard",
  },
  {
    name: "Products",
    href: "/products",
    icon: PackageIcon,
    key: "products",
  },
  {
    name: "Orders",
    href: "/orders",
    icon: ScanBarcode,
    key: "orders",
  },
  {
    name: "Users",
    href: "/users",
    icon: UsersIcon,
    key: "users",
  },
];

const Sidebar = ({ className }: Props) => {
  return (
    <aside className={cx(className, "space-y-4")}>
      {navItems.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className="flex items-center gap-x-3 text-payne-gray-darker font-semibold text hover:text-gunmetal transition-colors"
        >
          {createElement(item.icon, { className: "w-4 h-4", strokeWidth: 2.5 })}
          {item.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
