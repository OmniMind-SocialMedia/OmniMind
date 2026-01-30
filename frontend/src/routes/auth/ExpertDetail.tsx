import { useParams, Link } from 'react-router-dom';
import './ExpertDetail.css';

// Mock data
const mockExpert = {
    id: '1',
    name: 'Financial Analysis',
    slug: 'financial-analysis',
    status: 'active',
    currentVersion: {
        number: '4.2',
        createdAt: '2026-01-28',
        createdBy: 'John Doe',
        changeReason: 'Improved accuracy threshold logic based on debate resolution',
    },
    scope: {
        domain: 'Finance',
        subdomains: ['Equity Analysis', 'Fixed Income', 'Portfolio Management'],
        limitations: ['Not suitable for cryptocurrency analysis', 'Requires quarterly data updates'],
    },
    metrics: {
        accuracyScore: 94.7,
        usageCount: 1234,
        debateResolutions: 127,
        lastInvokedAt: '2 hours ago',
    },
    dependencies: [
        { id: '2', name: 'Market Data Provider', version: '2.0' },
        { id: '3', name: 'Risk Calculator', version: '1.5' },
    ],
    versions: [
        { number: '4.2', date: '2026-01-28', author: 'John Doe', type: 'improvement' },
        { number: '4.1', date: '2026-01-15', author: 'Jane Smith', type: 'bugfix' },
        { number: '4.0', date: '2026-01-01', author: 'John Doe', type: 'major' },
        { number: '3.5', date: '2025-12-15', author: 'Alex Johnson', type: 'improvement' },
    ],
};

export default function ExpertDetail() {
    const { id } = useParams();

    return (
        <div className="expert-detail container">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/dashboard">Dashboard</Link>
                <span>/</span>
                <Link to="/experts">Experts</Link>
                <span>/</span>
                <span>{mockExpert.name}</span>
            </nav>

            {/* Header */}
            <header className="expert-header">
                <div className="header-info">
                    <div className="title-row">
                        <h1>{mockExpert.name}</h1>
                        <span className={`status-badge ${mockExpert.status}`}>
                            {mockExpert.status}
                        </span>
                    </div>
                    <p className="version-info">
                        Version {mockExpert.currentVersion.number} ·
                        Updated {mockExpert.currentVersion.createdAt} by {mockExpert.currentVersion.createdBy}
                    </p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-outline">View History</button>
                    <button className="btn btn-primary">Open Debate</button>
                </div>
            </header>

            {/* Content Grid */}
            <div className="expert-grid">
                {/* Metrics */}
                <section className="section metrics-section">
                    <h2>Performance Metrics</h2>
                    <div className="metrics-grid">
                        <div className="metric-card primary">
                            <span className="metric-value">{mockExpert.metrics.accuracyScore}%</span>
                            <span className="metric-label">Accuracy Score</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">{mockExpert.metrics.usageCount.toLocaleString()}</span>
                            <span className="metric-label">Total Invocations</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">{mockExpert.metrics.debateResolutions}</span>
                            <span className="metric-label">Debates Resolved</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">{mockExpert.metrics.lastInvokedAt}</span>
                            <span className="metric-label">Last Invoked</span>
                        </div>
                    </div>
                </section>

                {/* Scope */}
                <section className="section">
                    <h2>Scope & Boundaries</h2>
                    <div className="scope-content">
                        <div className="scope-row">
                            <span className="scope-label">Domain</span>
                            <span className="scope-value">{mockExpert.scope.domain}</span>
                        </div>
                        <div className="scope-row">
                            <span className="scope-label">Subdomains</span>
                            <div className="tag-list">
                                {mockExpert.scope.subdomains.map((sub) => (
                                    <span key={sub} className="tag">{sub}</span>
                                ))}
                            </div>
                        </div>
                        <div className="scope-row">
                            <span className="scope-label">Limitations</span>
                            <ul className="limitations-list">
                                {mockExpert.scope.limitations.map((lim, i) => (
                                    <li key={i}>{lim}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Dependencies */}
                <section className="section">
                    <h2>Dependencies</h2>
                    <div className="dependencies-list">
                        {mockExpert.dependencies.map((dep) => (
                            <Link key={dep.id} to={`/experts/${dep.id}`} className="dependency-card">
                                <span className="dep-name">{dep.name}</span>
                                <span className="dep-version">v{dep.version}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Version History */}
                <section className="section">
                    <h2>Version History</h2>
                    <div className="version-timeline">
                        {mockExpert.versions.map((version, i) => (
                            <div key={version.number} className={`version-item ${i === 0 ? 'current' : ''}`}>
                                <div className="version-marker" />
                                <div className="version-content">
                                    <div className="version-header">
                                        <span className="version-number">v{version.number}</span>
                                        <span className={`version-type ${version.type}`}>{version.type}</span>
                                    </div>
                                    <span className="version-meta">{version.date} · {version.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Last Change Reason */}
                <section className="section change-reason-section">
                    <h2>Latest Change Reason</h2>
                    <blockquote className="change-reason">
                        {mockExpert.currentVersion.changeReason}
                    </blockquote>
                </section>
            </div>
        </div>
    );
}
