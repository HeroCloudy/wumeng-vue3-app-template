<template>
  <el-config-provider size="default" :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
<style scoped></style>
