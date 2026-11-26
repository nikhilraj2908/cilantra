import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Tag, CalendarDays, User } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { blogsApi } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogsApi.get(slug!).then((r) => r.data),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] grid place-items-center text-muted-foreground">
          Loading…
        </div>
      </SiteLayout>
    );
  }

  if (isError || !data) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] grid place-items-center">
          <div className="text-center">
            <h1 className="display-h2">Article not found</h1>
            <Button asChild className="mt-6">
              <Link to="/insights">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
              </Link>
            </Button>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article>
        {/* Hero */}
        <section className="hero-bg section relative overflow-hidden">
          <div className="container-px mx-auto max-w-3xl">
            <Link
              to="/insights"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>
            {data.category && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Tag className="h-3 w-3" /> {data.category}
              </span>
            )}
            <h1 className="display-h1 mt-3">{data.title}</h1>
            {data.excerpt && (
              <p className="mt-4 text-xl text-muted-foreground">{data.excerpt}</p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(data.createdAt)}
              </span>
              {data.author && (
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {data.author}
                </span>
              )}
            </div>
          </div>
        </section>

        {data.featured_image && (
          <div className="container-px mx-auto max-w-3xl -mt-6 mb-10">
            <img
              src={data.featured_image}
              alt={data.title}
              className="w-full rounded-2xl object-cover max-h-[400px]"
            />
          </div>
        )}

        <div className="container-px mx-auto max-w-3xl pb-16">
          {data.content ? (
            <div
              className="prose-cilantra"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          ) : (
            <p className="text-muted-foreground">Content coming soon.</p>
          )}

          {data.tags && data.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-border flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </SiteLayout>
  );
}

