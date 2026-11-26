import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { blogsApi, type Blog } from "@/lib/api";
import { slugify } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const emptyBlog: Partial<Blog> = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  author: "",
  category: "",
  tags: [],
  featured_image: "",
  status: "draft",
};

const CATEGORIES = [
  "Learning Strategy",
  "Instructional Design",
  "Digital Learning",
  "AI & Learning",
  "Facilitation",
  "Leadership",
  "Case Study",
  "Other",
];

export default function AdminBlogEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const isNew = !id;

  const [form, setForm] = useState<Partial<Blog>>(emptyBlog);
  const [tagsInput, setTagsInput] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["admin-blog", id],
    queryFn: () => blogsApi.get(id!).then((r) => r.data),
    enabled: !isNew,
  });

  useEffect(() => {
    if (data) {
      setForm(data);
      setTagsInput((data.tags ?? []).join(", "));
    }
  }, [data]);

  const save = useMutation({
    mutationFn: (payload: Partial<Blog>) =>
      isNew
        ? blogsApi.create(payload)
        : blogsApi.update(id!, payload),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["admin-blogs"] });
      toast.success(isNew ? "Blog created!" : "Blog updated!");
      if (isNew) navigate(`/admin/blogs/${res.data._id}`, { replace: true });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    save.mutate({ ...form, tags });
  }

  if (!isNew && isLoading) {
    return (
      <div className="text-muted-foreground py-8">Loading…</div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate("/admin/blogs")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </Button>
        <h1 className="display-h2">{isNew ? "New Blog" : "Edit Blog"}</h1>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={form.title ?? ""}
              onChange={(e) => {
                const title = e.target.value;
                setForm((f) => ({
                  ...f,
                  title,
                  slug: isNew ? slugify(title) : f.slug,
                }));
              }}
              required
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={form.slug ?? ""}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={form.author ?? ""}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={form.category ?? ""}
              onValueChange={(v) => setForm({ ...form, category: v })}
            >
              <SelectTrigger id="category" className="mt-2">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={form.status ?? "draft"}
              onValueChange={(v) =>
                setForm({ ...form, status: v as "draft" | "published" })
              }
            >
              <SelectTrigger id="status" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="featured_image">Featured Image URL</Label>
            <Input
              id="featured_image"
              value={form.featured_image ?? ""}
              onChange={(e) =>
                setForm({ ...form, featured_image: e.target.value })
              }
              placeholder="https://…"
              className="mt-2"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={form.excerpt ?? ""}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              rows={3}
              className="mt-2"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="content">Content (HTML)</Label>
            <Textarea
              id="content"
              value={form.content ?? ""}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={16}
              className="mt-2 font-mono text-xs"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. instructional design, eLearning"
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" disabled={save.isPending}>
            <Save className="mr-2 h-4 w-4" />
            {save.isPending ? "Saving…" : "Save Blog"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/blogs")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

