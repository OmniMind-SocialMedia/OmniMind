import { useParams, Link } from 'react-router-dom';
import './DebateView.css';

// Mock data
const mockDebate = {
    id: '1',
    topic: 'Improve accuracy threshold logic for edge cases',
    expert: { id: '1', name: 'Financial Analysis', version: '4.1' },
    status: 'open',
    createdAt: '2026-01-25',
    createdBy: { id: '1', name: 'John Doe', reputation: 450 },
    resolutionCriteria: 'Consensus from 3+ authority-level validators',
    arguments: [
        {
            id: '1',
            type: 'claim',
            author: { name: 'John Doe', reputation: 450, rank: 'expert' },
            claim: 'The current 85% accuracy threshold is too low for high-stakes financial decisions.',
            reasoning: 'Our analysis shows that decisions made at 85% confidence have a 12% error rate in production, which is unacceptable for portfolio management over $1M.',
            evidence: [
                { type: 'data', content: 'Production error logs Q4 2025' },
                { type: 'citation', content: 'Industry standard recommends 95% for high-stakes decisions' },
            ],
            status: 'active',
            createdAt: '2 days ago',
            children: [
                {
                    id: '2',
                    type: 'counter',
                    author: { name: 'Jane Smith', reputation: 380, rank: 'contributor' },
                    claim: 'Raising threshold to 95% would reduce coverage by 40%.',
                    reasoning: 'Analysis of our validation dataset shows only 60% of queries reach 95% confidence.',
                    evidence: [
                        { type: 'data', content: 'Confidence distribution analysis' },
                    ],
                    status: 'active',
                    createdAt: '1 day ago',
                    children: [],
                },
                {
                    id: '3',
                    type: 'support',
                    author: { name: 'Alex Johnson', reputation: 520, rank: 'authority' },
                    claim: 'A tiered threshold approach could balance accuracy and coverage.',
                    reasoning: 'We can implement risk-adjusted thresholds: 95% for >$1M, 90% for $100K-$1M, 85% for <$100K.',
                    evidence: [
                        { type: 'citation', content: 'Similar approach used by Bloomberg Terminal' },
                    ],
                    status: 'active',
                    createdAt: '12 hours ago',
                    children: [],
                },
            ],
        },
    ],
};

function ArgumentCard({ argument, depth = 0 }: { argument: typeof mockDebate.arguments[0]; depth?: number }) {
    const typeColors: Record<string, string> = {
        claim: 'primary',
        support: 'success',
        counter: 'warning',
        question: 'info',
        synthesis: 'purple',
    };

    return (
        <div className={`argument-card depth-${depth}`}>
            <div className="argument-header">
                <div className="author-info">
                    <span className="author-avatar">{argument.author.name[0]}</span>
                    <span className="author-name">{argument.author.name}</span>
                    <span className={`author-rank ${argument.author.rank}`}>{argument.author.rank}</span>
                    <span className="author-rep">{argument.author.reputation} rep</span>
                </div>
                <span className={`argument-type ${typeColors[argument.type]}`}>
                    {argument.type}
                </span>
            </div>

            <div className="argument-content">
                <h4 className="argument-claim">{argument.claim}</h4>
                <p className="argument-reasoning">{argument.reasoning}</p>

                {argument.evidence.length > 0 && (
                    <div className="evidence-list">
                        <span className="evidence-label">Evidence:</span>
                        {argument.evidence.map((ev, i) => (
                            <span key={i} className={`evidence-tag ${ev.type}`}>
                                {ev.type}: {ev.content}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="argument-footer">
                <span className="argument-time">{argument.createdAt}</span>
                <div className="argument-actions">
                    <button className="action-btn">Support</button>
                    <button className="action-btn">Counter</button>
                    <button className="action-btn">Question</button>
                </div>
            </div>

            {argument.children && argument.children.length > 0 && (
                <div className="argument-children">
                    {argument.children.map((child) => (
                        <ArgumentCard key={child.id} argument={child as any} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function DebateView() {
    const { id } = useParams();

    return (
        <div className="debate-view container">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/dashboard">Dashboard</Link>
                <span>/</span>
                <Link to="/debates">Debates</Link>
                <span>/</span>
                <span>Debate #{id}</span>
            </nav>

            {/* Header */}
            <header className="debate-header">
                <div className="header-info">
                    <div className="title-row">
                        <h1>{mockDebate.topic}</h1>
                        <span className={`status-badge ${mockDebate.status}`}>
                            {mockDebate.status}
                        </span>
                    </div>
                    <p className="debate-meta">
                        Related to <Link to={`/experts/${mockDebate.expert.id}`}>{mockDebate.expert.name} v{mockDebate.expert.version}</Link>
                        <span className="separator">·</span>
                        Started by {mockDebate.createdBy.name} on {mockDebate.createdAt}
                    </p>
                </div>
            </header>

            {/* Resolution Criteria */}
            <div className="resolution-banner">
                <span className="resolution-label">Resolution Criteria:</span>
                <span className="resolution-text">{mockDebate.resolutionCriteria}</span>
            </div>

            {/* Arguments */}
            <section className="arguments-section">
                <h2>Arguments</h2>
                <div className="arguments-tree">
                    {mockDebate.arguments.map((arg) => (
                        <ArgumentCard key={arg.id} argument={arg} />
                    ))}
                </div>
            </section>

            {/* Add Argument */}
            <section className="add-argument-section">
                <h3>Add Your Argument</h3>
                <form className="argument-form">
                    <div className="form-row">
                        <label>Argument Type</label>
                        <select>
                            <option value="support">Support</option>
                            <option value="counter">Counter</option>
                            <option value="question">Question</option>
                            <option value="synthesis">Synthesis</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>Claim</label>
                        <input type="text" placeholder="State your claim clearly..." />
                    </div>
                    <div className="form-row">
                        <label>Reasoning</label>
                        <textarea placeholder="Explain your reasoning..." rows={4} />
                    </div>
                    <div className="form-row">
                        <label>Evidence (optional)</label>
                        <input type="text" placeholder="Add citation or data reference..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Argument</button>
                </form>
            </section>
        </div>
    );
}
