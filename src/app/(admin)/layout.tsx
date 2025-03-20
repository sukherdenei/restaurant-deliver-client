import { ReactNode } from "react";
import { Sidebarr } from "../_components/Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex">
      <Sidebarr />
      {props.children}
    </div>
  );
};

export default Layout;
