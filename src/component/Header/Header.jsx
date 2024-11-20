/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HeaderAdmin({ onToggleSidebar }) {
  return (
    <div className="h-16 bg-white shadow-lg flex justify-between items-center px-3 sm:px-5 sticky top-0 z-50">
      {/* Left Side: Title */}
      <div className="flex gap-2 sm:gap-4">
        <h1 className="font-semibold text-emerald-500 text-base sm:text-2xl">
          Blindbox Tino
        </h1>
      </div>

      {/* Right Side: User Info and Avatar */}
      <div className="flex">
        <div className="flex gap-2 sm:gap-4 items-center">
          <p className="font-semibold text-xs sm:text-sm">Hi, Tino Phan</p>

          {/* Avatar */}
          <Avatar
            alt="Tino Phan"
            src=""
            sx={{ width: 24, height: 24 }} // Avatar smaller on mobile
            className="sm:w-8 sm:h-8"
          />
        </div>

        {/* Mobile Menu Button (3 dots) */}
        <div className="lg:hidden">
          <button onClick={onToggleSidebar} className="p-2 text-emerald-600">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
