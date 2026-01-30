import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { expertApi } from '../../lib/api/experts';
import './Dashboard.css'; // Reusing dashboard styles for container

// Schema for form inputs (everything is string)
const createExpertInputSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    scope: z.object({
        domain: z.string().min(1, 'Domain is required'),
        subdomains: z.string(),
        inputTypes: z.string(),
        outputTypes: z.string(),
        limitations: z.string(),
    }),
    changeReason: z.string().min(10, 'Please provide a reason for creating this expert'),
});

type CreateExpertInputForm = z.infer<typeof createExpertInputSchema>;

export default function ExpertCreate() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateExpertInputForm>({
        resolver: zodResolver(createExpertInputSchema),
    });

    const onSubmit = async (data: CreateExpertInputForm) => {
        setIsSubmitting(true);
        setError(null);
        try {
            await expertApi.create({
                name: data.name,
                scope: {
                    domain: data.scope.domain,
                    subdomains: data.scope.subdomains.split(',').map(s => s.trim()).filter(Boolean),
                    inputTypes: data.scope.inputTypes.split(',').map(s => s.trim()).filter(Boolean),
                    outputTypes: data.scope.outputTypes.split(',').map(s => s.trim()).filter(Boolean),
                    limitations: data.scope.limitations.split('\n').map(s => s.trim()).filter(Boolean),
                },
                logicDefinition: {}, // Empty for initial draft
                changeReason: data.changeReason,
            });
            navigate('/dashboard');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to create expert');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '2rem 0' }}>
            <h1>Create New Expert</h1>
            <p className="subtitle">Define a new knowledge domain expert.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="login-form" style={{ maxWidth: '100%', marginTop: '2rem' }}>
                {error && (
                    <div className="error-message" role="alert">
                        {error}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="name">Expert Name (Slug)</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="e.g. financial-analysis"
                        {...register('name')}
                        aria-invalid={!!errors.name}
                    />
                    <small>This will be used as the unique identifier (slug).</small>
                    {errors.name && (
                        <span className="field-error">{errors.name.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Domain Scope</label>
                    <input
                        type="text"
                        placeholder="Primary Domain (e.g. Finance)"
                        {...register('scope.domain')}
                    />
                    {errors.scope?.domain && <span className="field-error">{errors.scope.domain.message}</span>}
                </div>

                <div className="form-group">
                    <label>Subdomains (comma separated)</label>
                    <input
                        type="text"
                        placeholder="Equity, Fixed Income, Derivatives"
                        {...register('scope.subdomains')}
                    />
                </div>

                <div className="form-group">
                    <label>Input Types (comma separated)</label>
                    <input
                        type="text"
                        placeholder="10-K, Market Data, News"
                        {...register('scope.inputTypes')}
                    />
                </div>

                <div className="form-group">
                    <label>Output Types (comma separated)</label>
                    <input
                        type="text"
                        placeholder="Risk Score, Valuation, Analysis"
                        {...register('scope.outputTypes')}
                    />
                </div>

                <div className="form-group">
                    <label>Limitations (one per line)</label>
                    <textarea
                        rows={4}
                        placeholder="Cannot predict market crashes..."
                        {...register('scope.limitations')}
                    />
                </div>

                <div className="form-group">
                    <label>Initial Change Reason</label>
                    <textarea
                        rows={2}
                        placeholder="Initial creation..."
                        {...register('changeReason')}
                    />
                    {errors.changeReason && <span className="field-error">{errors.changeReason.message}</span>}
                </div>

                <div className="form-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-outline" onClick={() => navigate('/dashboard')}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating...' : 'Create Expert'}
                    </button>
                </div>
            </form>
        </div>
    );
}
