<template>
  <div class="demo">demo</div>
  <h3>{{ counter }}</h3>
  <button @click="demoStore.increment()">点击+1</button>
  <svg aria-hidden="true" class="svg">
    <use href="#icon-demo" fill="red" />
  </svg>
</template>

<script setup lang="ts">
import { useDemoStore } from '@/stores/modules/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
</script>
