<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";

// 行高下拉菜单
const lineHeightDropdownRef = ref();
onMounted(() => {
  new Dropdown({ el: lineHeightDropdownRef.value });
});

const currentLineHeight = ref(1.6);
const defaultLineHeight = 1.6; // 默认行高
const lineHeightList = [1, 1.5, 1.6, 1.75, 2, 3, 4, 5];
const handleSetLineHeight = (value) => {
  editor.chain().focus().setLineHeight(`${value}em`).run();
};

const handleUpdateLineHeight = ({ editor, transaction }) => {
  let lineHeight = editor.getAttributes("paragraph")?.lineHeight;
  if (!lineHeight) {
    const pos = transaction.curSelection.from;
    let node = editor.view.domAtPos(pos).node;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (node.tagName === "SECTION" && node.style.lineHeight) {
        lineHeight = node.style.lineHeight;
        break;
      } else if (node === editor.view.dom) {
        lineHeight = "1.6em"; // 默认行高
        break;
      }
      node = node.parentNode;
    }
  }
  currentLineHeight.value = +lineHeight.match(/\d+/)[0];
};

editor.on(
  "transaction",
  throttle(handleUpdateLineHeight, 240, { leading: false })
);
</script>

<template>
  <div ref="lineHeightDropdownRef" class="dropdown dropdown-lineHeight">
    <button class="dropdown-toggle">
      <svg-icon name="lineHeight"></svg-icon>
      <i class="icon-arrow"></i>
    </button>
    <div class="dropdown-menu">
      <div
        v-for="lh in lineHeightList"
        :key="lh"
        class="menu-item"
        :class="{ active: currentLineHeight === lh }"
        @click="handleSetLineHeight(lh)"
      >
        {{ lh }}{{ lh === defaultLineHeight ? "（默认）" : "" }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
