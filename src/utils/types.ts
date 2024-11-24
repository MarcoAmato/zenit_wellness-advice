// types.ts

export interface Source {
  sourceTitle: string;
  sourceLink: string;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  sources: Source[];
}

export interface Section {
  name: string;
  articles: Article[];
}

export interface ArticlesData {
  sections: Section[];
}