import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Tag, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { storiesApi } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export default function SuccessStoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["story", slug],
    queryFn: () => storiesApi.get(slug!).then((r) => r.data),
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
            <h1 className="display-h2">Story not found</h1>
            <Button asChild className="mt-6">
              <Link to="/success-stories">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Stories
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
          <div className="container-px mx-auto max-w-4xl">
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Stories
            </Link>
            {data.category && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Tag className="h-3 w-3" /> {data.category}
              </span>
            )}
            <h1 className="display-h1 mt-3">{data.title}</h1>
            {data.summary && (
              <p className="mt-4 text-xl text-muted-foreground">{data.summary}</p>
            )}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(data.createdAt)}
              {data.client && <> · {data.client}</>}
              {data.industry && <> · {data.industry}</>}
            </div>
          </div>
        </section>

        {/* Featured image */}
        {data.featured_image && (
          <div className="container-px mx-auto max-w-4xl -mt-6 mb-12">
            <img
              src={data.featured_image}
              alt={data.title}
              className="w-full rounded-2xl object-cover max-h-[480px] story-hero-image"
            />
          </div>
        )}

        {/* Body */}
        <div className="container-px mx-auto max-w-3xl pb-16">
          {data.content ? (
            <div
              className="prose-cilantra"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          ) : (
            <p className="text-muted-foreground">
              Full story content coming soon.
            </p>
          )}
        </div>
      </article>
    </SiteLayout>
  );
}

