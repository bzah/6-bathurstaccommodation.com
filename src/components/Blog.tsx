import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Best Motels Near Mount Panorama: Where to Stay for the Race",
    excerpt:
      "Discover the top-rated motels within minutes of the iconic Mount Panorama Circuit. From budget-friendly stays to premium options, find the perfect base for your Bathurst racing experience.",
    date: "March 28, 2026",
    slug: "best-motels-near-mount-panorama",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    tags: ["Accommodation", "Mount Panorama"],
  },
  {
    title: "Where to Stay During the Bathurst 1000: A Complete Guide",
    excerpt:
      "Planning your trip for the Bathurst 1000? This guide covers the best accommodation options, from motels and hotels to caravan parks and Airbnbs, plus tips for booking early.",
    date: "March 15, 2026",
    slug: "where-to-stay-during-bathurst-1000",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
    tags: ["Bathurst 1000", "Events"],
  },
  {
    title: "Things to Do in Bathurst NSW: 15 Must-See Attractions",
    excerpt:
      "Beyond the racetrack, Bathurst is rich in history, nature, and culture. Explore gold-rush heritage, stunning gardens, wineries, and adventure activities across the region.",
    date: "February 22, 2026",
    slug: "things-to-do-in-bathurst-nsw",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    tags: ["Attractions", "Travel Guide"],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Travel Tips & Guides
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Bathurst Travel Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Insider tips, accommodation guides, and everything you need to plan
            your perfect Bathurst getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-background/90 text-foreground text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
