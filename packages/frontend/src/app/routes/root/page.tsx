import { Outlet } from "react-router-dom";
import { SideMenu } from "../../layouts/sideMenu";
import "./page.css";

function Root() {
  return (
    <div className="wrapp">
      <div className="wrappLeft">
        <SideMenu />
      </div>
      <div className="wrappContent">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
