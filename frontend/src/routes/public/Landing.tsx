import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <header className="landing-header">
                <div className="container">
                    <Link to="/" className="logo">
                        <span className="logo-icon">◉</span>
                        <span className="logo-text">OmniMind</span>
                    </Link>
                    <nav className="landing-nav">
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#principles">Principles</a>
                        <Link to="/login" className="btn btn-outline">Sign In</Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Collaborative Intelligence Through
                            <span className="gradient-text"> Structured Reasoning</span>
                        </h1>
                        <p className="hero-description">
                            OmniMind is a cognitive governance platform where experts debate, validate,
                            and evolve structured knowledge. Build intelligence that explains itself.
                        </p>
                        <div className="hero-actions">
                            <Link to="/login" className="btn btn-primary btn-lg">
                                Get Started
                            </Link>
                            <a href="#how-it-works" className="btn btn-ghost btn-lg">
                                Learn More →
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-card">
                            <div className="card-header">
                                <span className="status-dot active"></span>
                                <span>Expert: Financial Analysis v4.2</span>
                            </div>
                            <div className="card-content">
                                <div className="metric-row">
                                    <span className="metric-label">Accuracy Score</span>
                                    <span className="metric-value">94.7%</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Debates Resolved</span>
                                    <span className="metric-value">127</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Human Validators</span>
                                    <span className="metric-value">23</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="features-section">
                <div className="container">
                    <h2 className="section-title">Not Another Social Platform</h2>
                    <p className="section-subtitle">
                        OmniMind is fundamentally different from existing platforms
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">◈</div>
                            <h3>Versioned Experts</h3>
                            <p>
                                Knowledge is structured as first-class objects with full version history,
                                dependencies, and audit trails.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">◇</div>
                            <h3>Structured Debates</h3>
                            <p>
                                Arguments require evidence. Resolution requires consensus.
                                Every change has a reasoning trail.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">◆</div>
                            <h3>Earned Reputation</h3>
                            <p>
                                No likes. No upvotes. Reputation is earned by being correct over time,
                                with domain-specific scoring.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">◎</div>
                            <h3>Full Explainability</h3>
                            <p>
                                Every decision, every change, every resolution comes with a complete
                                reasoning trace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="how-section">
                <div className="container">
                    <h2 className="section-title">How Intelligence Evolves</h2>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Create Expert</h4>
                                <p>Define scope, boundaries, and initial logic for a knowledge expert.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Open Debate</h4>
                                <p>Propose changes through structured arguments with evidence.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Validate & Resolve</h4>
                                <p>Domain experts review, counter-argue, and reach consensus.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Version & Deploy</h4>
                                <p>Changes create new versions with full audit trail.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section id="principles" className="principles-section">
                <div className="container">
                    <h2 className="section-title">Guiding Principles</h2>

                    <div className="principle-highlight">
                        <blockquote>
                            "If the system cannot explain why it did something,
                            it is not allowed to do it."
                        </blockquote>
                    </div>

                    <div className="principles-grid">
                        <div className="principle-item">
                            <strong>Explainability First</strong>
                            <span>Every action has a traceable reason</span>
                        </div>
                        <div className="principle-item">
                            <strong>Immutable History</strong>
                            <span>Nothing is ever deleted, only archived</span>
                        </div>
                        <div className="principle-item">
                            <strong>Earned Authority</strong>
                            <span>Trust through demonstrated competence</span>
                        </div>
                        <div className="principle-item">
                            <strong>Human Override</strong>
                            <span>Humans can always override automation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Build Accountable Intelligence?</h2>
                    <p>Join the platform where knowledge is earned, not voted.</p>
                    <Link to="/login" className="btn btn-primary btn-lg">
                        Start Contributing
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <span className="logo-icon">◉</span>
                            <span className="logo-text">OmniMind</span>
                            <p>Cognitive Governance Platform</p>
                        </div>
                        <div className="footer-links">
                            <h5>Platform</h5>
                            <a href="#features">Features</a>
                            <a href="#how-it-works">How It Works</a>
                            <a href="#principles">Principles</a>
                        </div>
                        <div className="footer-links">
                            <h5>Resources</h5>
                            <a href="#">Documentation</a>
                            <a href="#">API Reference</a>
                            <a href="#">Support</a>
                        </div>
                        <div className="footer-links">
                            <h5>Legal</h5>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Security</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2026 OmniMind. Built for long-term intelligence.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
