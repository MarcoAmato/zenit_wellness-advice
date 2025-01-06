import articlesData from './articles.json';

import { Article, ArticlesData } from './types';

const data: ArticlesData = articlesData;

// Mapping of frontend pillar names to JSON pillar names and colors
const pillarNameMap: { [key: string]: { name: string, color: string } } = {
  'nutrition': { name: 'Nutrition', color: '#4CAF50' }, // Green
  'exercise': { name: 'Sport', color: '#FF9800' }, // Orange
  'sleep': { name: 'Sleep', color: '#2196F3' }, // Blue
  'mindset': { name: 'Mindset', color: '#FFC107' }, // Yellow
  'social-connections': { name: 'Social Relationships', color: '#E91E63' }, // Pink
  'stress-management': { name: 'Stress Management', color: '#F44336' }, // Red
  'expert-services': { name: 'Expert Services', color: '#9E9E9E' } // Default color
};

export const getPillarKeyByValue = (value: string): string | undefined => {
  return Object.keys(pillarNameMap).find(key => pillarNameMap[key].name === value);
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
  const section = data.sections.find(section => section.name === pillar);
  if (!section) {
    console.error(`No articles found for pillar: ${pillar}`);
    console.error(`Available pillars: ${getAvailablePillars().join(', ')}`);
    return { articles: [], displayName: '' };
  }
  const displayName = pillarNameMap[section.name].name;
  console.log(`Found ${section.articles.length} articles for pillar: ${displayName}`);
  return { articles: section.articles, displayName: pillarNameMap[section.name].name };
};

/**
 * Get the color associated with a given pillar.
 * 
 * @param pillar Kind of article to retrieve
 * @returns Color for the given pillar
 */
export const getColorByPillar = (pillar: string): string => {
  const pillarData = pillarNameMap[pillar.toLowerCase()];
  if (!pillarData) {
    console.error(`No mapping found for pillar: ${pillar}`);
    console.error(`Available pillars: ${Object.keys(pillarNameMap).join(', ')}`);
    return '#000000'; // Default to black if no color is found
  }
  return pillarData.color;
};

/**
 * Get the display name associated with a given pillar.
 * 
 * @param pillar Kind of article to retrieve
 * @returns Display name for the given pillar
 */
export const getDisplyNameByPillar = (pillar: string): string => {
  const pillarData = pillarNameMap[pillar.toLowerCase()];
  if (!pillarData) {
    console.error(`No mapping found for pillar: ${pillar}`);
    console.error(`Available pillars: ${Object.keys(pillarNameMap).join(', ')}`);
    return 'Unknown'; // Default to 'Unknown' if no display name is found
  }
  console.log(`Display name for pillar: ${pillar} is ${pillarData.name}`);
  return pillarData.name;
}

/**
 * Get an article by its ID.
 * 
 * @param id ID of the article to retrieve
 * @returns Article with the given ID if it exists, otherwise undefined
 */
export const getArticleById = (id: number): Article | undefined => {
  for (const section of data.sections) {
    const article = section.articles.find(article => article.id === id);
    if (article) {
      return article;
    }
  }
  return undefined;
};

export const getPillarByArticleId = (id: number): string | undefined => {
  for (const section of data.sections) {
    const article = section.articles.find(article => article.id === id);
    if (article) {
      return section.name;
    }
  }
  return undefined;
}