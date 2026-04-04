import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Bathurst Accommodation",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${window.location.origin}/blog/${post.slug}`,
    },
  };

  // Simple markdown-ish rendering for the content
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={i} />;
        if (trimmed.startsWith("### "))
          return <h3 key={i} className="text-xl font-heading text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
        if (trimmed.startsWith("## "))
          return <h2 key={i} className="text-2xl font-heading text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("**") && trimmed.endsWith("**"))
          return <p key={i} className="font-semibold text-foreground mt-4 mb-1">{trimmed.slice(2, -2)}</p>;
        if (trimmed.startsWith("- "))
          return <li key={i} className="ml-6 text-muted-foreground leading-relaxed list-disc">{renderInline(trimmed.slice(2))}</li>;
        if (trimmed.startsWith("|")) return null; // skip table markdown for now
        return <p key={i} className="text-muted-foreground leading-relaxed mb-2">{renderInline(trimmed)}</p>;
      });
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**"))
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      return part;
    });
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${post.title} | Bathurst Accommodation Blog`}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.image}
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all mb-8"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose-custom font-body">
            {renderContent(post.content)}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              <ArrowLeft size={14} />
              Back to all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
