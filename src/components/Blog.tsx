import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Travel Tips & Guides
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-3 sm:mb-4">
            Bathurst Travel Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-sm sm:text-base">
            Insider tips, accommodation guides, and everything you need to plan
            your perfect Bathurst getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 right-3 flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-background/90 text-foreground text-[10px] sm:text-xs font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
