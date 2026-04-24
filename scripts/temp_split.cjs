module.exports = export interface Section {
  heading: string;
  paragraphs: string[];
  images?: {
    url: string;
    alt: string;
    caption: string;
  }[];
}

export interface Lecture {
  week: number;
  stage: number;
  stageTitle: string;
  title: string;
  instructor: string;
  description: string;
  content: Section[];
  quote?: { text: string; author: string };
  chart?: { title: string; url: string; description: string };
  sourceReferences?: { author: string; book: string }[];
}

export const curriculumData: Lecture[] = ;