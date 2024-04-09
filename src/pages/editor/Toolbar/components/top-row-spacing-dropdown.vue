<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";

// 段前距
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
    </button>
    <div class="dropdown-menu">
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 0 }"
        @click="handleSetSpacing(0)"
      >
        0（默认）
      </div>
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 8 }"
        @click="handleSetSpacing(8)"
      >
        8
      </div>
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 16 }"
        @click="handleSetSpacing(16)"
      >
        16
      </div>
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 24 }"
        @click="handleSetSpacing(24)"
      >
        24
      </div>
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 32 }"
        @click="handleSetSpacing(32)"
      >
        32
      </div>
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 40 }"
        @click="handleSetSpacing(40)"
      >
        40
      </div>
      <div
        class="menu-item"
        :class="{ active: currentSpacing === 48 }"
        @click="handleSetSpacing(48)"
      >
        48
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
