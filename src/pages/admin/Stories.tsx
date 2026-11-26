import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2, Search, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storiesApi } from "@/lib/api";

export default function AdminStories() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | "draft" | "published">("all");

  const { data, isLoading } = useQuery({
    queryKey: ["admin-stories"],
    queryFn: () => storiesApi.list().then((r) => r.data),
  });

  const filtered = (data ?? []).filter((s) => {
    if (status !== "all" && s.status !== status) return false;
    if (q && !`${s.title} ${s.category ?? ""}`.toLowerCase().includes(q.toLowerCase()))
      return false;
    return true;
  });

  const togglePub = useMutation({
    mutationFn: (row: { _id: string; status: string }) =>
      storiesApi.toggleStatus(
        row._id,
        row.status === "published" ? "draft" : "published",
      ),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-stories"] });
      toast.success("Status updated");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: (id: string) => storiesApi.delete(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-stories"] });
      toast.success("Deleted");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="display-h2">Success Stories</h1>
          <p className="mt-2 text-muted-foreground">Manage case studies and stories.</p>
        </div>
        <Button onClick={() => navigate("/admin/success-stories/new")}>
          <Plus className="h-4 w-4 mr-2" /> New story
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search…"
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
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-muted-foreground">
                  Loading…
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-muted-foreground">
                  No stories yet.
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s._id} className="border-t border-border">
                  <td className="p-4">
                    <Link
                      to={`/admin/success-stories/${s._id}`}
                      className="font-medium hover:text-primary"
                    >
                      {s.title}
                    </Link>
                    <div className="text-xs text-muted-foreground">/{s.slug}</div>
                  </td>
                  <td className="p-4 hidden md:table-cell text-muted-foreground">
                    {s.category || "—"}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        s.status === "published"
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-1 whitespace-nowrap">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        togglePub.mutate({ _id: s._id, status: s.status })
                      }
                    >
                      {s.status === "published" ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link to={`/admin/success-stories/${s._id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        if (confirm("Delete this story?")) remove.mutate(s._id);
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

