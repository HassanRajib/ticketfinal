import { useEffect, useState } from 'react';
import axios from 'axios';
const serverUrl = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    ticketsSold: 0,
    upcomingEvents: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('adminToken');
      const res = await axios.get(`${serverUrl}api/admin/dashboard-data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl mt-2 text-blue-600">{data.totalUsers}</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Tickets Sold</h2>
          <p className="text-3xl mt-2 text-green-600">{data.ticketsSold}</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-3xl mt-2 text-yellow-600">{data.upcomingEvents}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
