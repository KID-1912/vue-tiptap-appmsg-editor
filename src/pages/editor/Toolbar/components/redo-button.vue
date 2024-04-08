<script setup>
import { editor } from "@/pages/editor/editor.js";
</script>

<template>
  <button class="redo" @click="editor.commands.redo">
    <svg-icon name="redo"></svg-icon>
  </button>
</template>

<style lang="less" scoped></style>
