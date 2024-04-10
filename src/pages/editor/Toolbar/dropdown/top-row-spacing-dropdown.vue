<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";
import { SPACING_LIST } from "@/constants/spacingList.js";

// 段前距下拉菜单
const topRowSpacingDropdownRef = ref();
onMounted(() => {
  new Dropdown({ el: topRowSpacingDropdownRef.value });
});

// 设置段前距
const handleSetSpacing = (value) => {
  editor
    .chain()
    .focus()
    .setMargin({ top: `${value}px` })
    .run();
};

// 边距状态回显
const currentSpacing = ref(0);
const defaultSpacing = 0; // 默认段前距
const handleUpdateSpacing = ({ editor }) => {
  const marginTop = editor.getAttributes("paragraph")?.margin?.top || "0px";
  if (marginTop) {
    currentSpacing.value = +marginTop.match(/\d+/)[0];
  }
};
editor.on(
  "transaction",
  throttle(handleUpdateSpacing, 240, { leading: false })
);
</script>

<template>
  <div ref="topRowSpacingDropdownRef" class="dropdown dropdown-topRowSpacing">
    <button class="dropdown-toggle">
      <svg-icon name="rowSpacingTop" />
      <i class="icon-arrow"></i>
    </button>
    <div class="dropdown-menu">
      <div
        v-for="spacing in SPACING_LIST"
        :key="spacing"
        class="menu-item"
        :class="{ active: currentSpacing === spacing }"
        @click="handleSetSpacing(spacing)"
      >
        {{ spacing }}{{ spacing === defaultSpacing ? "（默认）" : "" }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
