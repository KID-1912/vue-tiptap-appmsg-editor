<script setup>
import { editor } from "@/pages/editor/editor.js";
import { throttle } from "lodash-es";

// 切换斜体
const isStrikeActive = ref(false);
const handleChangeStrike = () => {
  editor.chain().focus().toggleStrike().run();
};

// 斜体状态回显
const handleUpdateStrikeState = ({ editor }) => {
  if (editor.isActive("strike")) {
    isStrikeActive.value = true;
  } else {
    isStrikeActive.value = false;
  }
};

editor.on(
  "transaction",
  throttle(handleUpdateStrikeState, 240, { leading: false })
);
</script>

<template>
  <button
    class="strike"
    :class="{ active: isStrikeActive }"
    @click="handleChangeStrike"
  >
    <svg-icon name="strike"></svg-icon>
  </button>
</template>

<style lang="less" scoped></style>
