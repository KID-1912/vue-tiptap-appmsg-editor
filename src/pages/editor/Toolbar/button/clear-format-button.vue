<script setup>
import { editor } from "@/pages/editor/editor.js";
</script>

<template>
  <button class="clear" @click="editor.commands.unsetAllMarks">
    <svg-icon name="clear-format" />
  </button>
</template>

<style lang="less" scoped></style>
