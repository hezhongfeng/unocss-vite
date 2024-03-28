<template>
  <div :class="{ dark: preferredColor === 'dark' }">
    <div>
      <div class="dark:bg-dark-200 h-50 w-50 bg-teal-200">使用 class 匹配 dark 模式</div>
    </div>
    <AboutView />
  </div>
</template>

<script setup>
import AboutView from './views/AboutView.vue'
import { usePreferredColorScheme } from '@vueuse/core'
// 获取系统的模式设置：light dark
const preferredColor = usePreferredColorScheme()
</script>
