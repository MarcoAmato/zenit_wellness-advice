import articlesData from './articles.json';

interface Source {
  sourceTitle: string;
  sourceLink: string;
}

interface Article {
  title: string;
  body: string;
  sources: Source[];
}

interface Section {
  name: string;
  articles: Article[];
}

interface ArticlesData {
  sections: Section[];
}

const data: ArticlesData = articlesData;

// Mapping of frontend pillar names to JSON pillar names
const pillarNameMap: { [key: string]: string } = {
  'nutrition': 'Nutrition',
  'exercise': 'Sport',
  'sleep': 'Sleep',
  'mindset': 'Mindset',
  'social-connections': 'Social Relationships',
  'stress-management': 'Stress Management',
  'expert-services': 'Expert Services'
};

/**
 * Get all available pillars from the data source in the JSON file.
 * @returns List of available pillars
 */
export const getAvailablePillars = (): string[] => {
  return data.sections.map(section => section.name);
}

/**
 * Get all articles for a given pillar along with the pillar's display name.
 * E.g. for the pillar 'social-connection', this function will return all articles in 
 * the 'Social Relationships' section, along with the display name 'Social Relationships'.
 * 
 * @param pillar Kind of article to retrieve
 * @returns Articles for the given pillar and the pillar's display name
 */
export const getArticlesByPillar = (pillar: string): { articles: Article[], displayName: string } => {
  const jsonPillarName = pillarNameMap[pillar.toLowerCase()];
  if (!jsonPillarName) {
    console.error(`No mapping found for pillar: ${pillar}`);
    console.error(`Available pillars: ${Object.keys(pillarNameMap).join(', ')}`);
    return { articles: [], displayName: '' };
  }
  const section = data.sections.find(section => section.name === jsonPillarName);
  if (!section) {
    console.error(`No articles found for pillar: ${pillar}`);
    console.error(`Available pillars: ${getAvailablePillars().join(', ')}`);
    return { articles: [], displayName: '' };
  }
  return { articles: section.articles, displayName: section.name };
};