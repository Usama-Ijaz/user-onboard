import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  else {
    if (user !== null && user.profileCompletionStatus !== null && user.profileCompletionStatus === false) {
      return <Navigate to="/registration" replace />;
    }
  }

  return element;
};

export default ProtectedRoute;
