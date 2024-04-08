<script setup>
import { editor } from "@/pages/editor/editor.js";
</script>

<template>
  <button class="undo" @click="editor.commands.undo">
    <svg-icon name="undo" />
  </button>
</template>

<style lang="less" scoped></style>
