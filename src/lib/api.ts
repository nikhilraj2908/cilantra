import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

/* ── Auth token injection ─────────────────────────────────────────────── */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("cilantra_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* ── Response: auto-logout on 401 ───────────────────────────────────── */
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("cilantra_token");
      window.location.href = "/auth";
    }
    return Promise.reject(err);
  },
);

/* ══════════════════════ AUTH ════════════════════════════════════════════ */
export const authApi = {
  login: (email: string, password: string) =>
    api.post<{ token: string; user: { id: string; email: string; role: string } }>(
      "/auth/login",
      { email, password },
    ),
  me: () => api.get<{ id: string; email: string; role: string }>("/auth/me"),
  logout: () => api.post("/auth/logout"),
};

/* ══════════════════════ BLOGS ═══════════════════════════════════════════ */
export const blogsApi = {
  list: (params?: { status?: string; q?: string; category?: string }) =>
    api.get<Blog[]>("/blogs", { params }),

  get: (slugOrId: string) => api.get<Blog>(`/blogs/${slugOrId}`),

  create: (data: Partial<Blog>) => api.post<Blog>("/blogs", data),

  update: (id: string, data: Partial<Blog>) => api.put<Blog>(`/blogs/${id}`, data),

  delete: (id: string) => api.delete(`/blogs/${id}`),

  toggleStatus: (id: string, status: "published" | "draft") =>
    api.patch(`/blogs/${id}/status`, { status }),
};

/* ══════════════════════ SUCCESS STORIES ════════════════════════════════ */
export const storiesApi = {
  list: (params?: { status?: string; q?: string; category?: string }) =>
    api.get<Story[]>("/success-stories", { params }),

  get: (slugOrId: string) => api.get<Story>(`/success-stories/${slugOrId}`),

  create: (data: Partial<Story>) => api.post<Story>("/success-stories", data),

  update: (id: string, data: Partial<Story>) =>
    api.put<Story>(`/success-stories/${id}`, data),

  delete: (id: string) => api.delete(`/success-stories/${id}`),

  toggleStatus: (id: string, status: "published" | "draft") =>
    api.patch(`/success-stories/${id}/status`, { status }),
};

/* ══════════════════════ CONTACT ════════════════════════════════════════ */
export const contactApi = {
  submit: (data: ContactForm) =>
    api.post<{ message: string }>("/contact", data),

  list: () => api.get<ContactMessage[]>("/contact"),

  delete: (id: string) => api.delete(`/contact/${id}`),
};

/* ══════════════════════ TYPES ══════════════════════════════════════════ */
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author?: string;
  category?: string;
  tags?: string[];
  featured_image?: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export interface Story {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
  client?: string;
  industry?: string;
  category?: string;
  tags?: string[];
  featured_image?: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  organisation?: string;
  service_interest?: string;
  message: string;
}

export interface ContactMessage extends ContactForm {
  _id: string;
  createdAt: string;
}

export default api;

