export interface Event {
  id: number;
  name: string;
  points: number;
  date: Date;
  description: string;
  isFavorite: boolean;
  author: string;
  tags: string[];
}
