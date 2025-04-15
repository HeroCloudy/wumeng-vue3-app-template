<template>
  <h3 class="text-blue">Hello World, {{ msg }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  msg?: string
}>()
</script>
