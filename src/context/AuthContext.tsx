import React, { createContext, useContext, useState, useEffect } from "react";
import { authApi } from "@/lib/api";

interface User { id: string; email: string; role: string; }
interface AuthCtx {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthCtx>({} as AuthCtx);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem("cilantra_token"),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) { setLoading(false); return; }
    authApi.me()
      .then((r) => setUser(r.data))
      .catch(() => { localStorage.removeItem("cilantra_token"); setToken(null); })
      .finally(() => setLoading(false));
  }, [token]);

  async function login(email: string, password: string) {
    const { data } = await authApi.login(email, password);
    localStorage.setItem("cilantra_token", data.token);
    setToken(data.token);
    setUser(data.user);
  }

  function logout() {
    authApi.logout().catch(() => {});
    localStorage.removeItem("cilantra_token");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

