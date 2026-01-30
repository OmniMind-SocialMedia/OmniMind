import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '../../stores/authStore';
import './Login.css';

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, isLoading } = useAuthStore();
    const [error, setError] = useState<string | null>(null);

    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginForm) => {
        setError(null);
        try {
            await login(data.email, data.password);
            navigate(from, { replace: true });
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <Link to="/" className="logo">
                        <span className="logo-icon">◉</span>
                        <span className="logo-text">OmniMind</span>
                    </Link>
                    <h1>Welcome back</h1>
                    <p>Sign in to continue to the platform</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    {error && (
                        <div className="error-message" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            {...register('email')}
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                            <span className="field-error">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="••••••••"
                            {...register('password')}
                            aria-invalid={!!errors.password}
                        />
                        {errors.password && (
                            <span className="field-error">{errors.password.message}</span>
                        )}
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-link">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        New to OmniMind? <a href="#">Request access</a>
                    </p>
                </div>
            </div>

            <div className="login-side">
                <div className="side-content">
                    <blockquote>
                        "If the system cannot explain why it did something,
                        it is not allowed to do it."
                    </blockquote>
                    <div className="side-features">
                        <div className="side-feature">
                            <span className="feature-icon">◈</span>
                            <span>Versioned Experts</span>
                        </div>
                        <div className="side-feature">
                            <span className="feature-icon">◇</span>
                            <span>Structured Debates</span>
                        </div>
                        <div className="side-feature">
                            <span className="feature-icon">◆</span>
                            <span>Earned Reputation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
