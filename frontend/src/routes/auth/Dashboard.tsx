import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import './Dashboard.css';

// Mock data for demonstration
const mockExperts = [
    { id: '1', name: 'Financial Analysis', version: '4.2', accuracy: 94.7, status: 'active' },
    { id: '2', name: 'Legal Compliance', version: '2.1', accuracy: 91.2, status: 'active' },
    { id: '3', name: 'Risk Assessment', version: '3.0', accuracy: 88.5, status: 'deprecated' },
];

const mockDebates = [
    { id: '1', topic: 'Improve accuracy threshold logic', expert: 'Financial Analysis', status: 'open', participants: 5 },
    { id: '2', topic: 'Add regulatory edge cases', expert: 'Legal Compliance', status: 'voting', participants: 8 },
    { id: '3', topic: 'Refactor risk scoring model', expert: 'Risk Assessment', status: 'resolved', participants: 12 },
];

const mockActivity = [
    { id: '1', action: 'Argument validated', expert: 'Financial Analysis', time: '2 hours ago' },
    { id: '2', action: 'Debate resolution', expert: 'Legal Compliance', time: '5 hours ago' },
    { id: '3', action: 'Expert version created', expert: 'Risk Assessment', time: '1 day ago' },
];

export default function Dashboard() {
    const { user } = useAuthStore();

    return (
        <div className="dashboard container">
            {/* Welcome Header */}
            <header className="dashboard-header">
                <div>
                    <h1>Welcome back, {user?.displayName || 'User'}</h1>
                    <p>Here's what's happening with your experts and debates.</p>
                </div>
                <div className="header-stats">
                    <div className="stat-card">
                        <span className="stat-value">{user?.reputationScore || 0}</span>
                        <span className="stat-label">Reputation</span>
                    </div>
                </div>
            </header>

            {/* Dashboard Grid */}
            <div className="dashboard-grid">
                {/* Experts Section */}
                <section className="dashboard-section">
                    <div className="section-header">
                        <h2>Your Experts</h2>
                        <Link to="/experts" className="view-all">View all →</Link>
                    </div>
                    <div className="experts-list">
                        {mockExperts.map((expert) => (
                            <Link key={expert.id} to={`/experts/${expert.id}`} className="expert-card">
                                <div className="expert-info">
                                    <h3>{expert.name}</h3>
                                    <span className="version">v{expert.version}</span>
                                </div>
                                <div className="expert-meta">
                                    <span className={`status-badge ${expert.status}`}>
                                        {expert.status}
                                    </span>
                                    <span className="accuracy">{expert.accuracy}%</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Active Debates Section */}
                <section className="dashboard-section">
                    <div className="section-header">
                        <h2>Active Debates</h2>
                        <Link to="/debates" className="view-all">View all →</Link>
                    </div>
                    <div className="debates-list">
                        {mockDebates.map((debate) => (
                            <Link key={debate.id} to={`/debates/${debate.id}`} className="debate-card">
                                <div className="debate-info">
                                    <h4>{debate.topic}</h4>
                                    <span className="expert-name">{debate.expert}</span>
                                </div>
                                <div className="debate-meta">
                                    <span className={`status-badge ${debate.status}`}>
                                        {debate.status}
                                    </span>
                                    <span className="participants">{debate.participants} participants</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Recent Activity */}
                <section className="dashboard-section activity-section">
                    <div className="section-header">
                        <h2>Recent Activity</h2>
                    </div>
                    <div className="activity-list">
                        {mockActivity.map((activity) => (
                            <div key={activity.id} className="activity-item">
                                <div className="activity-icon">◎</div>
                                <div className="activity-content">
                                    <span className="activity-action">{activity.action}</span>
                                    <span className="activity-expert">{activity.expert}</span>
                                </div>
                                <span className="activity-time">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="dashboard-section stats-section">
                    <div className="section-header">
                        <h2>Your Impact</h2>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">23</span>
                            <span className="stat-desc">Arguments Validated</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">7</span>
                            <span className="stat-desc">Debates Resolved</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">3</span>
                            <span className="stat-desc">Experts Improved</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">89%</span>
                            <span className="stat-desc">Accuracy Rate</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
