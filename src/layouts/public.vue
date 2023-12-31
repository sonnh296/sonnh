<template>
  <div class="bg-slate-100 sticky top-0 z-10 headers max-w-full box-border">
    <div class="flex-col justify-between">
      <div>
        <h1
          class="text-gray-400 text-5xl mb-2 font-black font-mono text-center h-20 pt-4"
        >
          <p class="underline decoration-sky-500">boring coding</p>
        </h1>
      </div>
    </div>

    <div class="line"></div>
  </div>

  <div class="flex">
    <el-menu default-active="2" :collapse="isCollapse" class="menuitems">
      <el-menu-item index="0">
        <el-icon><MoreFilled /></el-icon>
        <span>{{ $t("hide") }}</span>
        <div
          v-on:click="handleCloseMenu"
          class="absolute left-0 h-full w-full"
          to="/"
        ></div>
      </el-menu-item>
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>{{ $t("home") }}</span>
        <NuxtLink class="absolute left-0 h-full w-full" to="/"></NuxtLink>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Crop /></el-icon>
        <span>{{ $t("frontend") }}</span>
        <NuxtLink
          class="absolute left-0 h-full w-full"
          to="/front-end"
        ></NuxtLink>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Setting /></el-icon>
        <span>{{ $t("backend") }}</span>
        <NuxtLink
          class="absolute left-0 h-full w-full"
          to="/back-end"
        ></NuxtLink>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><UploadFilled /></el-icon>
        <span>{{ $t("devops") }}</span>
        <NuxtLink class="absolute left-0 h-full w-full" to="/devops"></NuxtLink>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><Magnet /></el-icon>
        <span>{{ $t("science") }}</span>
        <NuxtLink
          class="absolute left-0 h-full w-full"
          to="/science"
        ></NuxtLink>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon><Rank /></el-icon>
        <span>{{ $t("politics") }}</span>
        <NuxtLink
          class="absolute left-0 h-full w-full"
          to="/politics"
        ></NuxtLink>
      </el-menu-item>
      <el-menu-item index="7">
        <el-icon><View /></el-icon>
        <span>{{ $t("points") }}</span>
        <NuxtLink class="absolute left-0 h-full w-full" to="/points"></NuxtLink>
      </el-menu-item>
      <el-menu-item index="8">
        <el-icon><EditPen /></el-icon>
        <span>{{ $t("stories") }}</span>
        <NuxtLink
          class="absolute left-0 h-full w-full"
          to="/stories"
        ></NuxtLink>
      </el-menu-item>
      <el-menu-item index="8">
        <el-icon><EditPen /></el-icon>
        <span>{{ $t("about") }}</span>
        <NuxtLink class="absolute left-0 h-full w-full" to="/about"></NuxtLink>
      </el-menu-item>
    </el-menu>
    <slot class="p-4" />
  </div>
  <Footer />
  <el-affix position="bottom" :offset="40">
    <div
      class="banner-language flex-col pl-2 bg-slate-200 w-44 p-2 rounded-md ml-2"
    >
      <DarklightButton />
      <LanguageButton />
    </div>
  </el-affix>
</template>

<script setup lang="ts">
import {
  Menu as IconMenu,
  Magnet,
  Rank,
  Crop,
  UploadFilled,
  Setting,
  View,
  MoreFilled,
  EditPen,
} from "@element-plus/icons-vue";
import { ref } from "vue";

const isCollapse = ref(false);

const handleCloseMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style>
body {
  background-color: #fff;
  color: rgba(10, 15, 15, 0.8);
  max-width: 100%;
}
.dark-mode body {
  background-color: #1a1a1a;
  color: #ebf4f1;
  .headers {
    background-color: #091a28;
  }
  .menuitems {
    background-color: rgba(100, 100, 100, 0.8);
    li {
      color: #ebf4f1;
    }
    & :hover {
      color: #091a28;
    }
  }
}

.dark-mode .banner-language {
  background-color: #282828;
}

.line {
  height: 0;
  border-top: 1px solid var(--el-border-color);
}
</style>
