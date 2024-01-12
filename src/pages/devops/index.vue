<template>
  <el-empty class="m-auto" :description="$t('nodata')">
    <el-button type="primary">
      <NuxtLink to="/">Back to home</NuxtLink></el-button
    >
    <p>
      {{ posts }}
    </p>
  </el-empty>
</template>

<script setup>
import { usePostByCategoryStore } from "~/stores/post-by-category";

definePageMeta({
  layout: "public",
});

const devopsPostStore = usePostByCategoryStore();
const { posts, fetchPosts } = devopsPostStore;

onMounted(async () => {
  await devopsPostStore.fetchPosts(2);
});
</script>
