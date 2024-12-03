import { ReactNode } from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="grid grid-cols-4 mt-4">
        <Sidebar className="col-span-1" />
        <main className="col-span-3">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
