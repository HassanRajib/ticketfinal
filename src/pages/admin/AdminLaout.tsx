
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const AdminLaout = () => {


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/'); 
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[20%] p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          <NavLink to="/admin" className="hover:text-blue-400">Dashboard</NavLink>
          <NavLink to="/admin/events" className="hover:text-blue-400">Manage Events</NavLink>
          <NavLink to="/admin/purchases" className="hover:text-blue-400">Purchases</NavLink>
          <NavLink to="/admin/users" className="hover:text-blue-400">Users</NavLink>
          <NavLink to="/admin/past-events" className="hover:text-blue-400">Past Events</NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-[#F7F8FA] flex flex-col p-3 text-black">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLaout