<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";

const fontsizeList = [12, 14, 15, 16, 17, 18, 20, 24];

const $dropdownSize = ref();
onMounted(() => {
  new Dropdown({ el: $dropdownSize.value });
});

const currentFontsize = ref(17);
const handleSetFontsize = (size) => {
  editor.chain().focus().setFontSize(size).run();
  currentFontsize.value = size;
};
// toolbarListeners.push(({ editor, transaction }) => {
//   let fontsizeValue = editor.getAttributes("textStyle").fontsize;
//   if (!fontsizeValue) {
//     const pos = transaction.curSelection.from;
//     let node = editor.view.domAtPos(pos).node;
//     while (node.nodeType !== 1) {
//       node = node.parentNode;
//     }
//     fontsizeValue = window.getComputedStyle(node).fontsize;
//   }
//   $dropdownSize.value.querySelector(".dropdown-toggle .size").textContent =
//     fontsizeValue;
// });
</script>

<template>
  <div ref="$dropdownSize" class="dropdown dropdown-size">
    <button class="dropdown-toggle">
      <span class="size">{{ currentFontsize }}px</span>
      <i class="icon-arrow"></i>
    </button>
    <div class="dropdown-menu">
      <div
        v-for="size in fontsizeList"
        :key="size"
        class="menu-item"
        :data-size="size"
        :style="`font-size: ${size}px`"
        @click="handleSetFontsize(size)"
      >
        {{ size }}px
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
