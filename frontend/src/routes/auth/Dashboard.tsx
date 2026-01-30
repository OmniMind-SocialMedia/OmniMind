import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../../stores/authStore';
import { expertApi } from '../../lib/api/experts';
import { debateApi } from '../../lib/api/debates';
import './Dashboard.css';

// Mock data for missing backend endpoints (Activity, Stats)
const mockActivity = [
    { id: '1', action: 'Argument validated', expert: 'Financial Analysis', time: '2 hours ago' },
    { id: '2', action: 'Debate resolution', expert: 'Legal Compliance', time: '5 hours ago' },
    { id: '3', action: 'Expert version created', expert: 'Risk Assessment', time: '1 day ago' },
];

export default function Dashboard() {
    const { user } = useAuthStore();

    const { data: expertsData, isLoading: expertsLoading } = useQuery({
        queryKey: ['experts', 'dashboard'],
        queryFn: () => expertApi.list({ limit: 3 }),
    });

    const { data: debatesData, isLoading: debatesLoading } = useQuery({
        queryKey: ['debates', 'dashboard'],
        queryFn: () => debateApi.list({ limit: 3, status: 'OPEN' }),
    });

    const experts = expertsData?.data || [];
    const debates = debatesData?.data || [];

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
                    {expertsLoading ? (
                        <div className="loading-placeholder">Loading experts...</div>
                    ) : experts.length === 0 ? (
                        <div className="empty-state">No experts found. <Link to="/experts/new">Create one</Link></div>
                    ) : (
                        <div className="experts-list">
                            {experts.map((expert) => (
                                <Link key={expert.id} to={`/experts/${expert.id}`} className="expert-card">
                                    <div className="expert-info">
                                        <h3>{expert.slug}</h3>
                                        <span className="version">v{expert.currentVersion?.number || 0}</span>
                                    </div>
                                    <div className="expert-meta">
                                        <span className={`status-badge ${expert.status?.toLowerCase()}`}>
                                            {expert.status}
                                        </span>
                                        <span className="accuracy">{expert.currentVersion?.accuracyScore || 0}%</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* Active Debates Section */}
                <section className="dashboard-section">
                    <div className="section-header">
                        <h2>Active Debates</h2>
                        <Link to="/debates" className="view-all">View all →</Link>
                    </div>
                    {debatesLoading ? (
                        <div className="loading-placeholder">Loading debates...</div>
                    ) : debates.length === 0 ? (
                        <div className="empty-state">No active debates. <Link to="/debates/new">Start one</Link></div>
                    ) : (
                        <div className="debates-list">
                            {debates.map((debate) => (
                                <Link key={debate.id} to={`/debates/${debate.id}`} className="debate-card">
                                    <div className="debate-info">
                                        <h4>{debate.topic}</h4>
                                        <span className="expert-name">{debate.expert?.slug || 'Unknown Expert'}</span>
                                    </div>
                                    <div className="debate-meta">
                                        <span className={`status-badge ${debate.status?.toLowerCase()}`}>
                                            {debate.status}
                                        </span>
                                        <span className="participants">{debate.participantCount || 0} participants</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
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
