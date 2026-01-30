import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { expertApi } from '../../lib/api/experts';
import './ExpertDetail.css';

export default function ExpertDetail() {
    const { id } = useParams<{ id: string }>();

    const { data: expert, isLoading, error } = useQuery({
        queryKey: ['expert', id],
        queryFn: () => expertApi.getById(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="container loading-container">
                <div className="loading-spinner" />
                <p>Loading expert details...</p>
            </div>
        );
    }

    if (error || !expert) {
        return (
            <div className="container error-container">
                <h2>Expert not found</h2>
                <p>The requested expert could not be loaded.</p>
                <Link to="/dashboard" className="btn btn-primary">Return to Dashboard</Link>
            </div>
        );
    }

    const currentVersion = expert.currentVersion;
    const scope = currentVersion?.scope;

    return (
        <div className="expert-detail container">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/dashboard">Dashboard</Link>
                <span>/</span>
                <Link to="/experts">Experts</Link>
                <span>/</span>
                <span>{expert.slug}</span>
            </nav>

            {/* Header */}
            <header className="expert-header">
                <div className="header-info">
                    <div className="title-row">
                        <h1>{expert.slug}</h1>
                        <span className={`status-badge ${expert.status?.toLowerCase()}`}>
                            {expert.status}
                        </span>
                    </div>
                    <p className="version-info">
                        Version {currentVersion?.number} ·
                        Updated {new Date(currentVersion?.createdAt || '').toLocaleDateString()} by {currentVersion?.createdBy?.displayName || 'Unknown'}
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
                            <span className="metric-value">{currentVersion?.accuracyScore || 0}%</span>
                            <span className="metric-label">Accuracy Score</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">{(currentVersion?.usageCount || 0).toLocaleString()}</span>
                            <span className="metric-label">Total Invocations</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">{expert.debateCount || 0}</span>
                            <span className="metric-label">Debates Resolved</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">
                                {currentVersion?.usageCount ? 'Recently' : 'Never'}
                            </span>
                            <span className="metric-label">Last Invoked</span>
                        </div>
                    </div>
                </section>

                {/* Scope */}
                {scope && (
                    <section className="section">
                        <h2>Scope & Boundaries</h2>
                        <div className="scope-content">
                            <div className="scope-row">
                                <span className="scope-label">Domain</span>
                                <span className="scope-value">{scope.domain}</span>
                            </div>
                            <div className="scope-row">
                                <span className="scope-label">Subdomains</span>
                                <div className="tag-list">
                                    {scope.subdomains.map((sub) => (
                                        <span key={sub} className="tag">{sub}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="scope-row">
                                <span className="scope-label">Limitations</span>
                                <ul className="limitations-list">
                                    {scope.limitations.map((lim, i) => (
                                        <li key={i}>{lim}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* Dependencies */}
                <section className="section">
                    <h2>Dependencies</h2>
                    {!expert.dependencies || expert.dependencies.length === 0 ? (
                        <p className="empty-text">No dependencies defined.</p>
                    ) : (
                        <div className="dependencies-list">
                            {expert.dependencies.map((dep) => (
                                <Link key={dep.id} to={`/experts/${dep.id}`} className="dependency-card">
                                    <span className="dep-name">{dep.slug}</span>
                                    <span className="dep-version">v{dep.version}</span>
                                    <span className="dep-type">{dep.type}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* Version History */}
                <section className="section">
                    <h2>Version History</h2>
                    <div className="version-timeline">
                        {expert.versions?.map((version, i) => (
                            <div key={version.number} className={`version-item ${i === 0 ? 'current' : ''}`}>
                                <div className="version-marker" />
                                <div className="version-content">
                                    <div className="version-header">
                                        <span className="version-number">v{version.number}</span>
                                    </div>
                                    <span className="version-meta">
                                        {new Date(version.createdAt).toLocaleDateString()} · {version.createdBy?.displayName || 'Unknown'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Last Change Reason */}
                {currentVersion?.changeReason && (
                    <section className="section change-reason-section">
                        <h2>Latest Change Reason</h2>
                        <blockquote className="change-reason">
                            {currentVersion.changeReason}
                        </blockquote>
                    </section>
                )}
            </div>
        </div>
    );
}
