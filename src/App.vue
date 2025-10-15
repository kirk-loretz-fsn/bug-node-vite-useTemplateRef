<script setup>
import { useTemplateRef } from "vue";

// Template ref with useTemplateRef() fails:
const input = useTemplateRef("input");

// Template ref with ref() works:
// import { ref } from "vue";
// const input = ref();
</script>

<template>
  <div>
    <input type="text" ref="input" />
    <button type="button" @click="console.log(input)">Click me</button>
  </div>
</template>
