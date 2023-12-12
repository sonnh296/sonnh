<template>
  <div class="bg-slate-100 sticky top-0 z-10 headers">
    <div class="flex w-screen p-2 justify-between">
      <div>
        <h1 class="text-gray-400 text-5xl mb-2">sonnh</h1>
      </div>
      <div v-if="$colorMode.preference == 'dark'" class="hidden lg:block">
        <h2 class="m-1 mt-2">{{ $t("badcolors") }}</h2>
      </div>
      <div class="flex">
        <div class="mr-2">
          <el-switch
            v-model="$colorMode.preference"
            class="ml-2 pt-2"
            inline-prompt
            active-text="Dark"
            inactive-text="Light"
            active-value="dark"
            inactive-value="light"
            size="large"
            width="80"
          />
        </div>
        <div class="mr-20">
          <el-select class="w-28 pt-2" v-model="locale" placeholder="Select">
            <el-option key="vi" label="Tiếng Việt" value="vi" />
            <el-option key="en" label="English" value="en" />
          </el-select>
        </div>
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
        <span>{{ $t("about") }}</span>
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
    </el-menu>
    <slot />
  </div>
  <Footer />
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

const { locale } = useI18n();
const colorMode = useColorMode();

const isCollapse = ref(false);

const handleCloseMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style>
body {
  background-color: #fff;
  color: rgba(10, 15, 15, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
  .headers {
    background-color: #091a28;
  }
  .menuitems {
    background-color: rgba(100, 100, 100, 0.8);
    li {
      color: #ebf4f1;
    }
    && :hover {
      color: #091a28;
    }
  }
}

.line {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}
</style>
