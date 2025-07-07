import React from 'react';
import { useUser } from '../contexts/UserContext';
import RenterDashboard from '../components/dashboard/RenterDashboard';
import OwnerDashboard from '../components/dashboard/OwnerDashboard';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {user?.type === 'owner' ? <OwnerDashboard /> : <RenterDashboard />}
    </div>
  );
};

export default Dashboard;