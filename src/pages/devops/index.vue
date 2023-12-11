<template>
  <el-empty class="m-auto" :description="$t('nodata')">
    <el-button type="primary">
      <NuxtLink to="/">Back to home</NuxtLink></el-button
    >
  </el-empty>
</template>

<script setup>
definePageMeta({
  layout: "public",
});
</script>
