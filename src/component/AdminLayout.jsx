import PropTypes from 'prop-types';
import HeaderAdmin from './Header/Header';
import LeftSidebar from './Header/LeftSidebar';
import { useState } from 'react';

function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div>
      <HeaderAdmin onToggleSidebar={toggleSidebar} />
      <div className="w-full flex bg-gray-100 min-h-screen h-auto">
        <LeftSidebar isSidebarOpen={isSidebarOpen} />
        <div className="w-full lg:w-[80%] p-10">{children}</div>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default AdminLayout;
