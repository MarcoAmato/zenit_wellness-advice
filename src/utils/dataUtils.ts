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

/**
 * Get all articles for a given pillar, from the data source in the JSON file.
 * @param pillar Kind of article to retrieve
 * @returns List of articles for the given pillar
 */
export const getArticlesByPillar = (pillar: string): Article[] => {
  const section = data.sections.find(section => section.name.toLowerCase() === pillar.toLowerCase());
  return section ? section.articles : [];
};