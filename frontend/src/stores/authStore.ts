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
    register: (email: string, password: string, displayName: string) => Promise<void>; // Add register
    logout: () => void;
    checkAuth: () => Promise<void>; // Add checkAuth to verify token on load
    setUser: (user: User) => void;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,

            login: async (email: string, password: string) => {
                set({ isLoading: true });
                try {
                    const { authApi } = await import('../lib/api/auth');
                    const response = await authApi.login({ email, password });

                    set({
                        user: response.user as User,
                        token: response.token,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({ isLoading: false });
                    throw error;
                }
            },

            register: async (email: string, password: string, displayName: string) => {
                set({ isLoading: true });
                try {
                    const { authApi } = await import('../lib/api/auth');
                    const response = await authApi.register({ email, password, displayName });

                    set({
                        user: response.user as User,
                        token: response.token,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({ isLoading: false });
                    throw error;
                }
            },

            checkAuth: async () => {
                const token = get().token;
                if (!token) return;

                try {
                    const { authApi } = await import('../lib/api/auth');
                    const user = await authApi.getProfile();
                    set({ user: user as User, isAuthenticated: true });
                } catch (error) {
                    set({ user: null, token: null, isAuthenticated: false });
                }
            },

            logout: () => {
                // Determine if we need to call API or just clear state
                // Ideally call API to blacklist token but for now just clear state
                // If we want to be strict:
                import('../lib/api/auth').then(({ authApi }) => {
                    authApi.logout().catch(() => { });
                });

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
