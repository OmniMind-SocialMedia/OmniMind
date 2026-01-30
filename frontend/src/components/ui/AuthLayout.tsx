import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

/**
 * AuthLayout - Protects routes that require authentication
 * Redirects to login if user is not authenticated
 */
export default function AuthLayout() {
    const { isAuthenticated, isLoading } = useAuthStore();
    const location = useLocation();

    // Show loading state while checking auth
    if (isLoading) {
        return (
            <div className="auth-loading">
                <div className="loading-spinner" />
                <p>Verifying authentication...</p>
            </div>
        );
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Render child routes if authenticated
    return <Outlet />;
}
