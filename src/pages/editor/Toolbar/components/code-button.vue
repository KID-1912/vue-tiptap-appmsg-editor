<script setup>
import { editor } from "@/pages/editor/editor.js";
import { throttle } from "lodash-es";

// 格式化代码块
const handleInsertCodeBlock = () => {
  if (editor.isActive("codeBlock")) {
    editor.chain().focus().toggleCodeBlock().run();
  } else {
    editor.chain().focus().insertContent({ type: "codeBlock" }).run();
  }
};

// 回显代码块状态
const isActiveCodeBlock = ref(false);
const handleUpdateCodeBlockState = () => {
  isActiveCodeBlock.value = editor.isActive("codeBlock");
};
editor.on(
  "transaction",
  throttle(handleUpdateCodeBlockState, 240, { leading: false })
);
</script>

<template>
  <button
    class="code"
    :class="{ active: isActiveCodeBlock }"
    @click="handleInsertCodeBlock"
  >
    <svg-icon name="code"></svg-icon>
  </button>
</template>

<style lang="less" scoped></style>
