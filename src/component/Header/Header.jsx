/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HeaderAdmin({ onToggleSidebar }) {
  return (
    <div className="h-16 bg-white shadow-lg flex justify-between items-center px-3 sm:px-5 sticky top-0 z-50">
      {/* Left Side: Title */}
      <div className="flex items-center gap-2 sm:gap-4">
        <img alt="logo" className="w-10" src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-73c77.appspot.com/o/Designer%20(5)%20(1).png?alt=media&token=43a61437-863b-478f-81f1-c8516fd0e88c"/>
        <h1 className="font-semibold text-emerald-500 text-xl sm:text-xl">
          Blindbox Tino
        </h1>
      </div>

      {/* Right Side: User Info and Avatar */}
      <div className="flex">
        <div className="flex gap-2 sm:gap-4 items-center">
          <p className="font-semibold text-xl sm:text-xl hidden sm:block">Xin Chào, Tino Phan</p>

          {/* Avatar */}
          <Avatar
            alt="Tino Phan"
            src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-73c77.appspot.com/o/2024-11-21_02h34_40.png?alt=media&token=cad7c58f-8675-44b6-ad5f-1e82f9227bae"
            sx={{ width: 30, height: 30 }} 
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
