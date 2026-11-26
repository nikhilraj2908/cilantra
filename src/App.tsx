import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import SuccessStoriesPage from "@/pages/SuccessStories";
import SuccessStoryDetailPage from "@/pages/SuccessStoryDetail";
import InsightsPage from "@/pages/Insights";
import BlogDetailPage from "@/pages/BlogDetail";
import ContactPage from "@/pages/Contact";
import AuthPage from "@/pages/Auth";
import NotFoundPage from "@/pages/NotFound";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminBlogs from "@/pages/admin/Blogs";
import AdminBlogEditor from "@/pages/admin/BlogEditor";
import AdminStories from "@/pages/admin/Stories";
import AdminStoryEditor from "@/pages/admin/StoryEditor";
import AdminMessages from "@/pages/admin/Messages";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/success-stories/:slug" element={<SuccessStoryDetailPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Admin (protected) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/new" element={<AdminBlogEditor />} />
          <Route path="blogs/:id" element={<AdminBlogEditor />} />
          <Route path="success-stories" element={<AdminStories />} />
          <Route path="success-stories/new" element={<AdminStoryEditor />} />
          <Route path="success-stories/:id" element={<AdminStoryEditor />} />
          <Route path="messages" element={<AdminMessages />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}

