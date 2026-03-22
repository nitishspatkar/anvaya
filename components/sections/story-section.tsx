interface StorySectionProps {
  number: number;
  title: string;
  content: string;
  imagePosition: 'left' | 'right';
}

export default function StorySection({ number, title, content, imagePosition }: StorySectionProps) {
  return (
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <div className="mb-6">
          <span className="text-sm text-muted-foreground font-medium">Part {number}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>
    </section>
  );
}
