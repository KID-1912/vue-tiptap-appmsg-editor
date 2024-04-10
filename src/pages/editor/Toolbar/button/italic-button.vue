<script setup>
import { editor } from "@/pages/editor/editor.js";
import { throttle } from "lodash-es";

// 切换斜体
const isItalicActive = ref(false);
const handleChangeItalic = () => {
  editor.chain().focus().toggleItalic().run();
};

// 斜体状态回显
const handleUpdateItalicState = ({ editor }) => {
  if (editor.isActive("italic")) {
    isItalicActive.value = true;
  } else {
    isItalicActive.value = false;
  }
};

editor.on(
  "transaction",
  throttle(handleUpdateItalicState, 240, { leading: false })
);
</script>

<template>
  <button
    class="italic"
    :class="{ active: isItalicActive }"
    @click="handleChangeItalic"
  >
    <svg-icon name="italic"></svg-icon>
  </button>
</template>

<style lang="less" scoped></style>
