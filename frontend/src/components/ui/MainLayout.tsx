import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import './MainLayout.css';

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '◎' },
    { path: '/experts', label: 'Experts', icon: '◈' },
    { path: '/debates', label: 'Debates', icon: '◇' },
    { path: '/governance', label: 'Governance', icon: '◆' },
];

export default function MainLayout() {
    const location = useLocation();

    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="header-content container">
                    <Link to="/dashboard" className="logo">
                        <span className="logo-icon">◉</span>
                        <span className="logo-text">OmniMind</span>
                    </Link>

                    <nav className="main-nav">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button className="btn-icon" aria-label="Notifications">
                            <span>🔔</span>
                        </button>
                        <button className="user-menu">
                            <div className="avatar">U</div>
                        </button>
                    </div>
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="main-footer">
                <div className="container">
                    <p className="footer-text">
                        OmniMind — Cognitive Governance Platform
                    </p>
                    <p className="footer-tagline">
                        "If the system cannot explain why it did something, it is not allowed to do it."
                    </p>
                </div>
            </footer>
        </div>
    );
}
