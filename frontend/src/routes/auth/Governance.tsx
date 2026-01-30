import { Link } from 'react-router-dom';
import './Governance.css';

// Mock data
const mockPendingReviews = [
    { id: '1', type: 'expert_update', title: 'Financial Analysis v4.3', author: 'John Doe', submitted: '2 hours ago' },
    { id: '2', type: 'debate_resolution', title: 'Risk threshold debate', author: 'Jane Smith', submitted: '5 hours ago' },
    { id: '3', type: 'new_expert', title: 'Regulatory Compliance', author: 'Alex Johnson', submitted: '1 day ago' },
];

const mockEscalations = [
    { id: '1', severity: 'high', issue: 'Potential brigading detected in Legal Compliance debate', reported: '1 hour ago' },
    { id: '2', severity: 'medium', issue: 'Unusual voting pattern on Risk Assessment expert', reported: '3 hours ago' },
];

const mockKillSwitches = [
    { id: 'expert-freeze', name: 'Expert Freeze', status: 'inactive', description: 'Freeze all expert invocations' },
    { id: 'debate-halt', name: 'Debate Halt', status: 'inactive', description: 'Pause all active debates' },
    { id: 'kris-disconnect', name: 'KRIS Disconnect', status: 'inactive', description: 'Stop signals to KRIS' },
    { id: 'readonly-mode', name: 'Read-Only Mode', status: 'inactive', description: 'Disable all write operations' },
];

const mockAuditLog = [
    { id: '1', action: 'USER_LOGIN', actor: 'john.doe@example.com', timestamp: '2026-01-30 07:00:00', details: 'IP: 192.168.x.x' },
    { id: '2', action: 'EXPERT_UPDATED', actor: 'jane.smith@example.com', timestamp: '2026-01-30 06:45:00', details: 'Expert: Financial Analysis → v4.2' },
    { id: '3', action: 'DEBATE_RESOLVED', actor: 'system', timestamp: '2026-01-30 06:30:00', details: 'Debate #127: Consensus reached' },
    { id: '4', action: 'REPUTATION_UPDATED', actor: 'system', timestamp: '2026-01-30 06:00:00', details: 'User: alex.johnson +25 rep' },
];

export default function Governance() {
    return (
        <div className="governance container">
            <header className="page-header">
                <h1>Governance & Moderation</h1>
                <p>Monitor system health, review pending actions, and manage escalations.</p>
            </header>

            <div className="governance-grid">
                {/* Pending Reviews */}
                <section className="section">
                    <div className="section-header">
                        <h2>Pending Reviews</h2>
                        <span className="count-badge">{mockPendingReviews.length}</span>
                    </div>
                    <div className="reviews-list">
                        {mockPendingReviews.map((review) => (
                            <div key={review.id} className="review-card">
                                <div className="review-info">
                                    <span className={`review-type ${review.type}`}>
                                        {review.type.replace('_', ' ')}
                                    </span>
                                    <h4>{review.title}</h4>
                                    <span className="review-meta">by {review.author} · {review.submitted}</span>
                                </div>
                                <div className="review-actions">
                                    <button className="btn btn-sm btn-outline">Review</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Escalations */}
                <section className="section escalations-section">
                    <div className="section-header">
                        <h2>Active Escalations</h2>
                        <span className="count-badge warning">{mockEscalations.length}</span>
                    </div>
                    <div className="escalations-list">
                        {mockEscalations.map((esc) => (
                            <div key={esc.id} className={`escalation-card ${esc.severity}`}>
                                <div className="escalation-indicator" />
                                <div className="escalation-info">
                                    <span className={`severity-badge ${esc.severity}`}>{esc.severity}</span>
                                    <p>{esc.issue}</p>
                                    <span className="escalation-time">{esc.reported}</span>
                                </div>
                                <button className="btn btn-sm btn-primary">Investigate</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Kill Switches */}
                <section className="section kill-switches-section">
                    <div className="section-header">
                        <h2>Emergency Controls</h2>
                    </div>
                    <div className="kill-switches-grid">
                        {mockKillSwitches.map((sw) => (
                            <div key={sw.id} className={`switch-card ${sw.status}`}>
                                <div className="switch-info">
                                    <h4>{sw.name}</h4>
                                    <p>{sw.description}</p>
                                </div>
                                <button className={`switch-toggle ${sw.status}`}>
                                    {sw.status === 'active' ? 'Deactivate' : 'Activate'}
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="warning-text">
                        ⚠️ These controls affect the entire system. Use with caution.
                    </p>
                </section>

                {/* Audit Log */}
                <section className="section audit-section">
                    <div className="section-header">
                        <h2>Recent Audit Log</h2>
                        <Link to="/governance/audit" className="view-all">View full log →</Link>
                    </div>
                    <div className="audit-table">
                        <div className="audit-header">
                            <span>Action</span>
                            <span>Actor</span>
                            <span>Timestamp</span>
                            <span>Details</span>
                        </div>
                        {mockAuditLog.map((log) => (
                            <div key={log.id} className="audit-row">
                                <span className="audit-action">{log.action}</span>
                                <span className="audit-actor">{log.actor}</span>
                                <span className="audit-time">{log.timestamp}</span>
                                <span className="audit-details">{log.details}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* System Health */}
                <section className="section health-section">
                    <div className="section-header">
                        <h2>System Health</h2>
                    </div>
                    <div className="health-grid">
                        <div className="health-card good">
                            <span className="health-indicator" />
                            <span className="health-label">API Gateway</span>
                            <span className="health-status">Healthy</span>
                        </div>
                        <div className="health-card good">
                            <span className="health-indicator" />
                            <span className="health-label">Database</span>
                            <span className="health-status">Healthy</span>
                        </div>
                        <div className="health-card good">
                            <span className="health-indicator" />
                            <span className="health-label">Event Bus</span>
                            <span className="health-status">Healthy</span>
                        </div>
                        <div className="health-card warning">
                            <span className="health-indicator" />
                            <span className="health-label">KRIS Connection</span>
                            <span className="health-status">Degraded</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
