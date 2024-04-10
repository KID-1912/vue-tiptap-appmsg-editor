<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";
import { SPACING_LIST } from "@/constants/spacingList.js";

// 段后距
const bottomRowSpacingDropdownRef = ref();
onMounted(() => {
  new Dropdown({ el: bottomRowSpacingDropdownRef.value });
});

// 设置段后距
const handleSetSpacing = (value) => {
  editor
    .chain()
    .focus()
    .setMargin({ bottom: `${value}px` })
    .run();
};

// 边距状态回显
const currentSpacing = ref(0);
const defaultSpacing = 24; // 默认段后距
const handleUpdateSpacing = ({ editor, transaction }) => {
  let marginBottom = editor.getAttributes("paragraph")?.margin?.bottom;
  if (!marginBottom) {
    const pos = transaction.curSelection.from;
    let node = editor.view.domAtPos(pos).node;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (node.nodeType === 1 && node.tagName === "P") {
        marginBottom = window.getComputedStyle(node).marginBottom;
        break;
      } else if (node === editor.view.dom) {
        marginBottom = "24px"; // 默认段后距
        break;
      }
      node = node.parentNode;
    }
  }
  currentSpacing.value = +marginBottom.match(/\d+/)[0];
};
editor.on(
  "transaction",
  throttle(handleUpdateSpacing, 240, { leading: false })
);
</script>

<template>
  <div
    ref="bottomRowSpacingDropdownRef"
    class="dropdown dropdown-bottomRowSpacing"
  >
    <button class="dropdown-toggle">
      <svg-icon name="rowSpacingBottom" />
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
