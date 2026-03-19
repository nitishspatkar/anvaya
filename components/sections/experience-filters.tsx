const CATEGORIES = ['All', 'Nature & Adventure', 'Food & Hospitality', 'Swiss Culture', 'Famous Highlights', 'Seasonal'];

export default function ExperienceFilters({ 
  activeCategory, 
  setActiveCategory 
}: { 
  activeCategory: string; 
  setActiveCategory: (category: string) => void;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex flex-wrap gap-2 md:gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
