<template>
  <div class="demo">demo</div>
  <h3>{{ counter }}</h3>
  <button @click="demoStore.increment()">点击+1</button>
  <svg aria-hidden="true" class="svg">
    <use href="#icon-demo" fill="red" />
  </svg>

  <div>
    <h2>测试Element Plus</h2>
    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success" @click="onNotificationClick">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>

      <el-date-picker v-model="dateDemo" type="date" placeholder="测试日期" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDemoStore } from '@/stores/modules/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)

const dateDemo = ref('')

const onNotificationClick = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}
</script>
