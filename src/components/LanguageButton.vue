<template>
  <div class="mt-2">
    <select v-model="locale" class="language">
      <option key="vi" label="Tiếng Việt" value="vi"></option>
      <option key="en" label="English" value="en"></option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped>
.language {
  border: 1px solid #333;
}
.dark-mode .language {
  background-color: darkcyan;
}
</style>
