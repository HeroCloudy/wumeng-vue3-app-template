<template>
  <div class="index">index</div>
  <div>msg: {{ msg }}</div>
  <div>isShow: {{ isShow }}</div>
  <button @click="toggle()">Toggle</button>
  <hello-world msg="message" />
</template>

<script setup lang="ts">
const [isShow, toggle] = useToggle()
const msg = ref('Hello world')
</script>
