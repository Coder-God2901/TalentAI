import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// This component is a wrapper around any route we want to protect
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { session } = useAuth();

  // If there is no active session, redirect the user to the login page
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // If there is a session, render the child components (the protected page)
  return children;
};