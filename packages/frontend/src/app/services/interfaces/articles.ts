export interface IArticle {
  id: string;
  title: string;
  category: string;
  tags: string[];
  creationId: string;
  writers: string[];
  editions: string[];
}

export interface IEdition {
  id: string;
  authorId: string;
  articleId: string;
  date: Date;
  content: string;
  status: "pending" | "approved" | "rejected";
  reviewDate: Date;
}

export interface IReaction {
  id: string;
  label: string;
  userId: string;
  articleId: string;
}
