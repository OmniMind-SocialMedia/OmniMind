import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
    id: string;
    email: string;
    displayName: string;
    avatarUrl?: string;
    role: 'user' | 'reviewer' | 'moderator' | 'admin';
    reputationScore: number;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;

    // Actions
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    setUser: (user: User) => void;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,

            login: async (email: string, _password: string) => {
                set({ isLoading: true });

                try {
                    // TODO: Replace with actual API call
                    // Simulating API call for development
                    await new Promise((resolve) => setTimeout(resolve, 1000));

                    const mockUser: User = {
                        id: 'user-001',
                        email,
                        displayName: email.split('@')[0],
                        role: 'user',
                        reputationScore: 100,
                    };

                    set({
                        user: mockUser,
                        token: 'mock-jwt-token',
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({ isLoading: false });
                    throw error;
                }
            },

            logout: () => {
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                });
            },

            setUser: (user) => {
                set({ user, isAuthenticated: true });
            },

            setLoading: (isLoading) => {
                set({ isLoading });
            },
        }),
        {
            name: 'omnimind-auth',
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
