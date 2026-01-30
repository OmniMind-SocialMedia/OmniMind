import { apiClient } from './client';

export interface ExpertScope {
    domain: string;
    subdomains: string[];
    inputTypes: string[];
    outputTypes: string[];
    limitations: string[];
}

export interface ExpertPermissions {
    invokeRoles: string[];
    editRoles: string[];
    approveRoles: string[];
    viewRoles: string[];
}

// Minimal expert for listing
export interface ExpertSummary {
    id: string;
    slug: string;
    status: 'DRAFT' | 'REVIEW' | 'ACTIVE' | 'DEPRECATED' | 'RETIRED';
    currentVersion: {
        number: number;
        scope: ExpertScope;
        permissions: ExpertPermissions;
        accuracyScore: number;
        usageCount: number;
        createdAt: string;
        createdBy: { id: string; displayName: string };
        changeReason: string;
    } | null;
    createdBy: {
        id: string;
        displayName: string;
    };
    createdAt: string;
    debateCount?: number;
}

// Full expert detail
export interface ExpertDetail extends ExpertSummary {
    versions: Array<{
        number: number;
        scope: ExpertScope;
        permissions: ExpertPermissions;
        changeReason: string;
        createdBy: { id: string; displayName: string };
        createdAt: string;
    }>;
    dependencies: Array<{
        id: string;
        slug: string;
        version: number;
        type: 'REQUIRES' | 'RECOMMENDS' | 'CONFLICTS';
    }>;
    debates: Array<any>; // Simplified for now
}

export interface CreateExpertInput {
    name: string;
    scope: ExpertScope;
    permissions?: ExpertPermissions;
    logicDefinition: Record<string, unknown>;
    changeReason: string;
}

export const expertApi = {
    list: async (params?: { page?: number; limit?: number; status?: string; search?: string }) => {
        const response = await apiClient.get<{
            data: ExpertSummary[];
            pagination: { page: number; total: number; totalPages: number };
        }>('/experts', { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await apiClient.get<ExpertDetail>(`/experts/${id}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get<ExpertDetail>(`/experts/slug/${slug}`);
        return response.data;
    },

    create: async (data: CreateExpertInput) => {
        const response = await apiClient.post<ExpertDetail>('/experts', data);
        return response.data;
    },

    updateStatus: async (id: string, status: string) => {
        const response = await apiClient.patch<{ data: ExpertDetail }>(`/experts/${id}/status`, { status });
        return response.data.data;
    },
};
