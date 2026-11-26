import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Search, CalendarDays, Tag, FileText, Download, Image, FolderOpen } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { blogsApi } from "@/lib/api";
import { formatDate } from "@/lib/utils";

const resourceCards = [
  {
    icon: FileText,
    title: "Articles & Insights",
    description: "Practical perspectives on learning design, instructional strategy, digital learning, and AI-enabled capability building.",
    cta: "Read Articles",
    link: "#articles",
  },
  {
    icon: Image,
    title: "Training Gallery",
    description: "Glimpses from our workshops, offsites, university sessions, and leadership programs.",
    cta: "View Gallery",
    link: "#gallery",
  },
  {
    icon: Download,
    title: "Brochures",
    description: "Download our company profile, service brochures and solution notes.",
    cta: "Download",
    link: "#brochures",
  },
  {
    icon: FolderOpen,
    title: "Work Samples",
    description: "Explore selected eLearning snippets, ILT designs, storyboards, and performance support tools.",
    cta: "Explore Samples",
    link: "#samples",
  },
];

export default function InsightsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["blogs", "published"],
    queryFn: () => blogsApi.list({ status: "published" }).then((r) => r.data),
  });

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const categories = useMemo(() => {
    const s = new Set<string>();
    (data ?? []).forEach((b) => b.category && s.add(b.category));
    return ["All", ...Array.from(s)];
  }, [data]);

  const filtered = useMemo(() => {
    return (data ?? []).filter((b) => {
      if (cat !== "All" && b.category !== cat) return false;
      if (!q) return true;
      return `${b.title} ${b.excerpt ?? ""}`.toLowerCase().includes(q.toLowerCase());
    });
  }, [data, q, cat]);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="hero-bg pt-20 pb-10 relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Insights & Resources</span>
            <h1 className="display-h2 mt-3">
              Articles, resources, and learning perspectives from Cilantra.
            </h1>
          </div>

          {/* Resource cards */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceCards.map((rc) => (
              <a
                key={rc.title}
                href={rc.link}
                className="card-elegant p-5 group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <rc.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-display font-semibold text-sm">
                  {rc.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {rc.description}
                </p>
                <div className="mt-3 inline-flex items-center text-xs text-primary font-medium">
                  {rc.cta} <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles…"
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
                  <div key={i} className="card-elegant h-56 animate-pulse bg-muted/40" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">
                No articles published yet — check back soon.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((b) => (
                  <Link
                    key={b._id}
                    to={`/insights/${b.slug}`}
                    className="card-elegant overflow-hidden group flex flex-col"
                  >
                    {b.featured_image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={b.featured_image}
                          alt={b.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {b.category && (
                          <span className="inline-flex items-center gap-1">
                            <Tag className="h-3 w-3" /> {b.category}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />{" "}
                          {formatDate(b.createdAt)}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg group-hover:text-primary transition-colors">
                        {b.title}
                      </h3>
                      {b.excerpt && (
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                          {b.excerpt}
                        </p>
                      )}
                      <div className="mt-auto pt-4 inline-flex items-center text-sm font-medium text-primary">
                        Read more <ArrowRight className="ml-1.5 h-4 w-4" />
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

