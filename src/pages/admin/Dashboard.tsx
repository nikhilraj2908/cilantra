import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Mail, ArrowRight } from "lucide-react";
import { contactApi } from "@/lib/api";

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
  const { data: messages } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: () => contactApi.list().then((r) => r.data),
  });

  const msgCount = messages?.length ?? 0;

  return (
    <div>
      <h1 className="display-h2">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Overview of your contact inbox.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Stat value={msgCount} label="Total contact submissions" accent />
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
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
