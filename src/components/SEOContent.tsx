interface SEOSection {
  heading: string;
  body: string | string[];
}

interface SEOContentProps {
  intro?: string;
  sections: SEOSection[];
  keywordsCloud?: string[];
  className?: string;
}

const SEOContent = ({ intro, sections, keywordsCloud, className = "" }: SEOContentProps) => {
  return (
    <section className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 ${className}`}>
      {intro && (
        <p className="text-sm sm:text-base md:text-lg font-body text-muted-foreground leading-relaxed mb-8 sm:mb-10">
          {intro}
        </p>
      )}
      <div className="space-y-8 sm:space-y-10">
        {sections.map((s) => (
          <article key={s.heading}>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4">{s.heading}</h2>
            {Array.isArray(s.body) ? (
              s.body.map((p, i) => (
                <p key={i} className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))
            ) : (
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">{s.body}</p>
            )}
          </article>
        ))}
      </div>
      {keywordsCloud && keywordsCloud.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-heading text-sm uppercase tracking-wide text-muted-foreground mb-3">
            Related searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {keywordsCloud.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-body"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SEOContent;
