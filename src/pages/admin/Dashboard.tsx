import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FileText, Trophy, Mail, ArrowRight } from "lucide-react";
import { blogsApi, storiesApi, contactApi } from "@/lib/api";

function Stat({
  value,
  label,
  accent,
}: {
  value: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        accent
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card border-border"
      }`}
    >
      <div className="text-4xl font-display">{value}</div>
      <div
        className={`mt-2 text-xs uppercase tracking-widest ${
          accent ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { data: blogs } = useQuery({
    queryKey: ["admin-blogs"],
    queryFn: () => blogsApi.list().then((r) => r.data),
  });
  const { data: stories } = useQuery({
    queryKey: ["admin-stories"],
    queryFn: () => storiesApi.list().then((r) => r.data),
  });
  const { data: messages } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: () => contactApi.list().then((r) => r.data),
  });

  const blogsTotal = blogs?.length ?? 0;
  const blogsPublished = blogs?.filter((b) => b.status === "published").length ?? 0;
  const blogsDraft = blogsTotal - blogsPublished;
  const storiesTotal = stories?.length ?? 0;
  const storiesPublished = stories?.filter((s) => s.status === "published").length ?? 0;
  const storiesDraft = storiesTotal - storiesPublished;
  const msgCount = messages?.length ?? 0;

  return (
    <div>
      <h1 className="display-h2">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Overview of your content and inbox.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Stat value={blogsTotal} label="Total blogs" accent />
        <Stat value={blogsPublished} label="Published blogs" />
        <Stat value={blogsDraft} label="Draft blogs" />
        <Stat value={storiesTotal} label="Total success stories" accent />
        <Stat value={storiesPublished} label="Published stories" />
        <Stat value={storiesDraft} label="Draft stories" />
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-5">
        <Link to="/admin/blogs" className="card-elegant p-6 group">
          <FileText className="h-6 w-6 text-primary" />
          <div className="mt-3 font-display text-lg">Manage Blogs</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Create, edit and publish articles.
          </div>
          <div className="mt-4 inline-flex items-center text-sm text-primary">
            Open <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
        <Link to="/admin/success-stories" className="card-elegant p-6 group">
          <Trophy className="h-6 w-6 text-primary" />
          <div className="mt-3 font-display text-lg">Manage Stories</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Add, edit and publish success stories.
          </div>
          <div className="mt-4 inline-flex items-center text-sm text-primary">
            Open <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
        <Link to="/admin/messages" className="card-elegant p-6 group">
          <Mail className="h-6 w-6 text-primary" />
          <div className="mt-3 font-display text-lg">Contact Messages</div>
          <div className="mt-1 text-sm text-muted-foreground">
            {msgCount} total submissions.
          </div>
          <div className="mt-4 inline-flex items-center text-sm text-primary">
            Open <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

