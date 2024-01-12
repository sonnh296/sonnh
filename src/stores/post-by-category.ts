import type { Post } from "~/type";

export const usePostByCategoryStore = defineStore(
  "usePostByCategoryStore",
  () => {
    const posts = ref<Post[]>([]);
    const action = {
      async fetchPosts(catid?: number) {
        const { data }: any = await useFetch(
          `http://localhost:8081/api/v1/reader/post/category/${catid?.toString()}`
        );
        if (data.value) {
          posts.value = data.value;
        }
      },
    };

    return {
      posts,
      ...action,
    };
  }
);
