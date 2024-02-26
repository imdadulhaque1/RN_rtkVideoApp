export interface VideoDetailsInterface {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  tags?: string[] | null;
  likes: number;
  unlikes: number;
  thumbnailUrl: string;
}
