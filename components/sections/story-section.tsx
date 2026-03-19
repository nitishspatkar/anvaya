interface StorySectionProps {
  number: number;
  title: string;
  content: string;
  imagePosition: 'left' | 'right';
}

export default function StorySection({ number, title, content, imagePosition }: StorySectionProps) {
  const imageCol = (
    <div className="w-full h-96 md:h-full min-h-96 bg-muted rounded-none flex items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-muted-foreground/40 text-6xl md:text-8xl font-serif font-bold mb-4">
            {String(number).padStart(2, '0')}
          </div>
          <p className="text-sm text-muted-foreground">Image placeholder</p>
        </div>
      </div>
    </div>
  );

  const contentCol = (
    <div className="flex flex-col justify-center py-8 md:py-12">
      <div className="mb-4">
        <span className="inline-block text-sm font-semibold text-primary mb-2">
          Part {number}
        </span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
        {content}
      </p>
    </div>
  );

  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageCol}
              {contentCol}
            </>
          ) : (
            <>
              {contentCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
