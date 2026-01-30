import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Layouts
import MainLayout from './components/ui/MainLayout';
import AuthLayout from './components/ui/AuthLayout';

// Lazy load route components for code splitting
const Landing = lazy(() => import('./routes/public/Landing'));
const Login = lazy(() => import('./routes/public/Login'));
const Register = lazy(() => import('./routes/public/Register'));
const Dashboard = lazy(() => import('./routes/auth/Dashboard'));
const ExpertDetail = lazy(() => import('./routes/auth/ExpertDetail'));
const ExpertCreate = lazy(() => import('./routes/auth/ExpertCreate'));
const DebateView = lazy(() => import('./routes/auth/DebateView'));
const Governance = lazy(() => import('./routes/auth/Governance'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p>Loading...</p>
    </div>
  );
}

import { useEffect } from 'react';
import { useAuthStore } from './stores/authStore';

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Authenticated Routes */}
        <Route element={<AuthLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/experts/new" element={<ExpertCreate />} />
            <Route path="/experts/:id" element={<ExpertDetail />} />
            <Route path="/debates/:id" element={<DebateView />} />
            <Route path="/governance" element={<Governance />} />
          </Route>
        </Route>
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
