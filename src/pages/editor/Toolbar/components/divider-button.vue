<script setup>
import { editor } from "@/pages/editor/editor.js";

// 插入分隔线
const handleInsertDivider = () => {
  editor
    .chain()
    .focus()
    .insertContent([{ type: "hr" }])
    .run();
};
</script>

<template>
  <button class="divider" @click="handleInsertDivider">
    <svg-icon name="divider"></svg-icon>
  </button>
</template>

<style lang="less" scoped></style>
