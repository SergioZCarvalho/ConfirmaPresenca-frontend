import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/service';

type AuthState = {
  user?: User | null;
  access_token?: string | null;
};

type AuthAction = {
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  //acao de logout exemplo: logout: () => void
};

export const initialState: AuthState = {
  user: null,
  access_token: null,
};

export const useAuthStore = create<AuthAction & AuthState>()(
  persist(
    (set) => ({
      ...initialState,
      setToken(token) {
        set({ access_token: token });
      },
      setUser(user) {
        set({ user: user });
      },
      //ação de logout aqui repetir o de cima mas set({user: null, access_token: null...
    }),
    {
      name: 'auth-store',
    },
  ),
);
