<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";

const dropdownAlignRef = ref();
onMounted(() => {
  new Dropdown({ el: dropdownAlignRef.value });
});

// 设置对齐方式
const currentAlign = ref("justify");
const handleSetAlign = (align) => {
  editor.chain().focus().setTextAlign(align).run();
  currentAlign.value = align;
};
</script>

<template>
  <div ref="dropdownAlignRef" class="dropdown dropdown-align">
    <button class="dropdown-toggle">
      <svg-icon :name="currentAlign" class="text-[#07c160]"></svg-icon>
      <i class="icon-arrow"></i>
    </button>
    <div class="dropdown-menu">
      <div class="menu-item" @click="handleSetAlign('left')">
        <svg-icon name="left" />左对齐
      </div>
      <div class="menu-item" @click="handleSetAlign('center')">
        <svg-icon name="center" />居中对齐
      </div>
      <div class="menu-item" @click="handleSetAlign('right')">
        <svg-icon name="right" />右对齐
      </div>
      <div class="menu-item" @click="handleSetAlign('justify')">
        <svg-icon name="justify" />两端对齐
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
