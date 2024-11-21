/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";

function LeftSidebar({ isSidebarOpen }) {
  const activeClassname =
    "relative px-4 py-3 flex items-center space-x-4 rounded-lg text-emerald-600 bg-[#EBF8F4]";
  const unactiveClassname =
    "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group";

  return (
    <div
      id="sideNav"
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } lg:block bg-white w-full lg:w-[250px] fixed lg:top-[60px] left-0 h-full shadow-md z-10 transition-all duration-300 ease-in-out`}
    >
      <div className="p-4 space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClassname : unactiveClassname
          }
        >
          <DashboardIcon />
          <span className="-mr-1 font-medium text-base sm:text-lg">Bảng điều khiển</span>
        </NavLink>
        <NavLink
          to="/product-management"
          className={({ isActive }) =>
            isActive ? activeClassname : unactiveClassname
          }
        >
          <BadgeIcon />
          <span className="-mr-1 font-medium text-base sm:text-lg">Sản Phẩm</span>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftSidebar;
