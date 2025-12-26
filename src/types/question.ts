export type Question = {
  id: string;
  question: string;
  relatedCode?: string;
  options: string[];
  answer?: number;
  relevantTags?: string[];
};
