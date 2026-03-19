interface ExperienceCardProps {
  image: string;
  category: string;
  title: string;
  teaser: string;
  seasons: string[];
  effort?: 'Easy' | 'Moderate' | 'Challenging';
}

export default function ExperienceCard({
  image,
  category,
  title,
  teaser,
  seasons,
  effort,
}: ExperienceCardProps) {
  const effortColors = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Challenging: 'bg-orange-100 text-orange-800',
  };

  return (
    <div className="group flex flex-col h-full overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full aspect-video md:aspect-[4/3] bg-gradient-to-br from-muted via-muted/70 to-muted/50 overflow-hidden">
        <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
          <rect width="400" height="300" fill="#2C5F3E" />
          <circle cx="200" cy="150" r="80" fill="#8B7355" opacity="0.3" />
          <path d="M0,200 Q100,100 200,120 T400,200 L400,300 L0,300 Z" fill="#D4A574" opacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 bg-background border border-border px-6 py-6 md:py-8 flex flex-col">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block text-xs md:text-sm font-medium text-secondary bg-muted px-3 py-1">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
          {title}
        </h3>

        {/* Teaser */}
        <p className="text-muted-foreground text-sm md:text-base mb-6 flex-grow">
          {teaser}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {seasons.map((season) => (
            <span
              key={season}
              className="text-xs md:text-sm text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-none"
            >
              {season}
            </span>
          ))}
          {effort && (
            <span
              className={`text-xs md:text-sm font-medium px-2.5 py-1 rounded-none ${
                effortColors[effort]
              }`}
            >
              {effort}
            </span>
          )}
        </div>

        {/* CTA Arrow */}
        <div className="flex items-center text-primary font-medium text-sm md:text-base group-hover:translate-x-1 transition">
          Learn more
          <span className="ml-2">→</span>
        </div>
      </div>
    </div>
  );
}
