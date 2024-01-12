export interface Tag {
  id?: string;
  tagName?: string;
}

export interface Post {
  id: 1;
  title?: string;
  content?: string;
  priority?: number;
  createTime?: string;
  listTag?: Array<Tag>;
}
