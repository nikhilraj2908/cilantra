import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2, Search, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogsApi } from "@/lib/api";

export default function AdminBlogs() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | "draft" | "published">("all");

  const { data, isLoading } = useQuery({
    queryKey: ["admin-blogs"],
    queryFn: () => blogsApi.list().then((r) => r.data),
  });

  const filtered = (data ?? []).filter((b) => {
    if (status !== "all" && b.status !== status) return false;
    if (q && !`${b.title} ${b.category ?? ""}`.toLowerCase().includes(q.toLowerCase()))
      return false;
    return true;
  });

  const togglePub = useMutation({
    mutationFn: (row: { _id: string; status: string }) =>
      blogsApi.toggleStatus(
        row._id,
        row.status === "published" ? "draft" : "published",
      ),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-blogs"] });
      toast.success("Status updated");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: (id: string) => blogsApi.delete(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-blogs"] });
      toast.success("Deleted");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="display-h2">Blogs</h1>
          <p className="mt-2 text-muted-foreground">
            Manage articles and posts.
          </p>
        </div>
        <Button onClick={() => navigate("/admin/blogs/new")}>
          <Plus className="h-4 w-4 mr-2" /> New blog
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title or category…"
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5">
          {(["all", "published", "draft"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                status === s
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4 hidden md:table-cell">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4 hidden lg:table-cell">Updated</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-muted-foreground">
                  Loading…
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-muted-foreground">
                  No blogs yet.
                </td>
              </tr>
            ) : (
              filtered.map((b) => (
                <tr key={b._id} className="border-t border-border">
                  <td className="p-4">
                    <Link
                      to={`/admin/blogs/${b._id}`}
                      className="font-medium hover:text-primary"
                    >
                      {b.title}
                    </Link>
                    <div className="text-xs text-muted-foreground">/{b.slug}</div>
                  </td>
                  <td className="p-4 hidden md:table-cell text-muted-foreground">
                    {b.category || "—"}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        b.status === "published"
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4 hidden lg:table-cell text-muted-foreground">
                    {new Date(b.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right space-x-1 whitespace-nowrap">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        togglePub.mutate({ _id: b._id, status: b.status })
                      }
                    >
                      {b.status === "published" ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link to={`/admin/blogs/${b._id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        if (confirm("Delete this blog?")) remove.mutate(b._id);
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

