import ExperienceCard from '@/components/experience-card';

const EXPERIENCES = [
  {
    id: 1,
    category: 'Food & Hospitality',
    title: 'Alpine Cheese-Making & Farm Visit',
    teaser: 'Learn the centuries-old craft at a family-run Alpine dairy',
    seasons: ['Spring', 'Summer', 'Autumn'],
    effort: 'Moderate',
    image: '/experience-1.jpg',
  },
  {
    id: 2,
    category: 'Nature & Adventure',
    title: 'Vineyard Walk at Lavaux',
    teaser: 'Terraced vineyards overlooking Lake Geneva with local wine tasting',
    seasons: ['Summer', 'Autumn'],
    effort: 'Easy',
    image: '/experience-2.jpg',
  },
  {
    id: 3,
    category: 'Nature & Adventure',
    title: 'Igloo Building',
    teaser: 'Build your own igloo and experience a night under alpine stars',
    seasons: ['Winter'],
    effort: 'Moderate',
    image: '/experience-3.jpg',
  },
  {
    id: 4,
    category: 'Food & Hospitality',
    title: 'Snowshoeing with Fondue',
    teaser: 'Trek through snowy forests then enjoy melted cheese in a mountain cabin',
    seasons: ['Winter'],
    effort: 'Moderate',
    image: '/experience-4.jpg',
  },
  {
    id: 5,
    category: 'Nature & Adventure',
    title: 'Hiking — Bernese Oberland',
    teaser: 'Alpine trails with breathtaking views of Jungfrau and surrounding peaks',
    seasons: ['Summer', 'Autumn'],
    effort: 'Challenging',
    image: '/experience-5.jpg',
  },
  {
    id: 6,
    category: 'Food & Hospitality',
    title: 'Fondue & Raclette Evening at Home',
    teaser: 'Intimate Swiss cheese night with stories and wine at our dinner table',
    seasons: ['Autumn', 'Winter', 'Spring'],
    effort: 'Easy',
    image: '/experience-6.jpg',
  },
  {
    id: 7,
    category: 'Food & Hospitality',
    title: 'Indian Home-Cooked Meal',
    teaser: 'An evening of authentic Indian cuisine prepared in our Bern kitchen',
    seasons: ['Year-round'],
    image: '/experience-7.jpg',
  },
  {
    id: 8,
    category: 'Famous Highlights',
    title: 'Bollywood Filming Locations',
    teaser: 'Discover where iconic Bollywood films were shot across Switzerland',
    seasons: ['Year-round'],
    image: '/experience-8.jpg',
  },
  {
    id: 9,
    category: 'Swiss Culture',
    title: 'Bern City Insider Walk',
    teaser: 'Medieval old town secrets, local markets, and hidden corners with our guide',
    seasons: ['Spring', 'Summer', 'Autumn'],
    effort: 'Easy',
    image: '/experience-9.jpg',
  },
];

export default function ExperienceGrid({ category }: { category: string }) {
  const filtered =
    category === 'All'
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {filtered.map((experience) => (
        <ExperienceCard
          key={experience.id}
          category={experience.category}
          title={experience.title}
          teaser={experience.teaser}
          seasons={experience.seasons}
          effort={experience.effort}
          image={experience.image}
        />
      ))}
    </div>
  );
}
