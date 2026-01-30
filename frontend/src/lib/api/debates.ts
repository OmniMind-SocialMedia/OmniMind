import { apiClient } from './client';

export type DebateStatus = 'OPEN' | 'VOTING' | 'RESOLVED' | 'STALE' | 'CLOSED';
export type ArgumentType = 'CLAIM' | 'SUPPORT' | 'COUNTER' | 'QUESTION' | 'SYNTHESIS';

export interface Evidence {
    type: 'CITATION' | 'DATA' | 'EXPERT_OUTPUT' | 'EXTERNAL_LINK';
    content: string;
    sourceUrl?: string;
}

export interface Argument {
    id: string;
    type: ArgumentType;
    content: string; // This maps to 'claim' + 'reasoning' usually, likely need to adjust frontend type
    claim: string;
    reasoning: string;
    author: {
        id: string;
        displayName: string;
        reputationScore: number;
    };
    evidence: Evidence[];
    validationStatus: 'PENDING' | 'VALIDATED' | 'DISPUTED' | 'REFUTED';
    replies?: Argument[];
    createdAt: string;
}

export interface DebateSummary {
    id: string;
    topic: string;
    status: DebateStatus;
    expert: {
        id: string;
        slug: string;
        currentVersion: { number: number } | null;
    };
    createdBy: {
        id: string;
        displayName: string;
    };
    argumentCount: number;
    participantCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface DebateDetail extends DebateSummary {
    description?: string;
    resolutionCriteria: string;
    arguments: Argument[];
    resolvedAt?: string;
    outcome?: Record<string, unknown>;
}

export interface CreateDebateInput {
    expertId: string;
    topic: string;
    description?: string;
    resolutionCriteria: string;
}

export interface CreateArgumentInput {
    parentArgumentId?: string;
    type: ArgumentType;
    claim: string;
    reasoning: string;
    evidence?: Evidence[];
}

export const debateApi = {
    list: async (params?: { page?: number; limit?: number; status?: DebateStatus; expertId?: string }) => {
        const response = await apiClient.get<{
            data: DebateSummary[];
            pagination: { page: number; total: number; totalPages: number };
        }>('/debates', { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await apiClient.get<{ data: DebateDetail }>(`/debates/${id}`);
        return response.data.data;
    },

    getStats: async (id: string) => {
        const response = await apiClient.get<{ data: any }>(`/debates/${id}/stats`);
        return response.data.data;
    },

    create: async (data: CreateDebateInput) => {
        const response = await apiClient.post<{ data: DebateDetail }>('/debates', data);
        return response.data.data;
    },

    addArgument: async (debateId: string, data: CreateArgumentInput) => {
        const response = await apiClient.post<{ data: Argument }>(`/debates/${debateId}/arguments`, data);
        return response.data.data;
    },

    updateStatus: async (id: string, status: DebateStatus, outcome?: Record<string, unknown>) => {
        const response = await apiClient.patch<{ data: DebateDetail }>(`/debates/${id}/status`, { status, outcome });
        return response.data.data;
    },
};
