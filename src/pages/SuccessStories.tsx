import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Search, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { storiesApi, type Story } from "@/lib/api";

export default function SuccessStoriesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["stories", "published"],
    queryFn: () =>
      storiesApi.list({ status: "published" }).then((r) => r.data),
  });

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const categories = useMemo(() => {
    const s = new Set<string>();
    (data ?? []).forEach((st) => st.category && s.add(st.category));
    return ["All", ...Array.from(s)];
  }, [data]);

  const filtered = useMemo(() => {
    return (data ?? []).filter((st) => {
      if (cat !== "All" && st.category !== cat) return false;
      if (!q) return true;
      return `${st.title} ${st.summary ?? ""}`.toLowerCase().includes(q.toLowerCase());
    });
  }, [data, q, cat]);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="hero-bg section relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl py-10 md:py-14">
          <span className="eyebrow">Success Stories</span>
          <h1 className="display-h1 mt-5 max-w-3xl">
            Capability{" "}
            <span className="text-primary">Built.</span> Outcomes{" "}
            <span className="text-primary">Delivered.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            A look at how Cilantra has partnered with organisations to translate
            learning ambitions into measurable workplace impact.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stories…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                    cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="card-elegant h-64 animate-pulse bg-muted/40" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">
                No stories yet — check back soon.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((s) => (
                  <Link
                    key={s._id}
                    to={`/success-stories/${s.slug}`}
                    className="card-elegant overflow-hidden group flex flex-col"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-gold/10 overflow-hidden">
                      {s.featured_image && (
                        <img
                          src={s.featured_image}
                          alt={s.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      {s.category && (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Tag className="h-3 w-3" /> {s.category}
                        </span>
                      )}
                      <h3 className="mt-2 font-display text-xl group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      {s.summary && (
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                          {s.summary}
                        </p>
                      )}
                      <div className="mt-auto pt-4 inline-flex items-center text-sm font-medium text-primary">
                        Read story <ArrowRight className="ml-1.5 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

