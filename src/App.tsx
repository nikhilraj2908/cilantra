import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import IndustryDetailPage from "@/pages/IndustryDetail";
import SuccessStoriesPage from "@/pages/SuccessStories";
import SuccessStoryDetailPage from "@/pages/SuccessStoryDetail";
import ContactPage from "@/pages/Contact";
import AuthPage from "@/pages/Auth";
import NotFoundPage from "@/pages/NotFound";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminMessages from "@/pages/admin/Messages";

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };
      if (!scrollToHash()) {
        requestAnimationFrame(() => {
          scrollToHash();
        });
      }
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, key]);

  return null;
}

function AdminShortcut() {
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === ",") {
        e.preventDefault();
        navigate("/admin");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AdminShortcut />
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/success-stories/:slug" element={<SuccessStoryDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Admin (protected) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="messages" element={<AdminMessages />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}

