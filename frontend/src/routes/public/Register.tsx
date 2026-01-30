import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '../../stores/authStore';
import './Login.css'; // Reusing Login styles for consistency

const registerSchema = z.object({
    displayName: z.string().min(3, 'Display name must be at least 3 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
    const navigate = useNavigate();
    const { register: registerUser, isLoading } = useAuthStore();
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterForm) => {
        setError(null);
        try {
            await registerUser(data.email, data.password, data.displayName);
            navigate('/dashboard', { replace: true });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            const message = err.response?.data?.error || 'Registration failed. Please try again.';
            setError(message);
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
                    <h1>Create an account</h1>
                    <p>Join the cognitive governance platform</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    {error && (
                        <div className="error-message" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="displayName">Display Name</label>
                        <input
                            id="displayName"
                            type="text"
                            placeholder="John Doe"
                            {...register('displayName')}
                            aria-invalid={!!errors.displayName}
                        />
                        {errors.displayName && (
                            <span className="field-error">{errors.displayName.message}</span>
                        )}
                    </div>

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
                            autoComplete="new-password"
                            placeholder="••••••••"
                            {...register('password')}
                            aria-invalid={!!errors.password}
                        />
                        {errors.password && (
                            <span className="field-error">{errors.password.message}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            placeholder="••••••••"
                            {...register('confirmPassword')}
                            aria-invalid={!!errors.confirmPassword}
                        />
                        {errors.confirmPassword && (
                            <span className="field-error">{errors.confirmPassword.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating account...' : 'Create account'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>

            <div className="login-side">
                <div className="side-content">
                    <blockquote>
                        "Truth is not established by authority, but by validation."
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
