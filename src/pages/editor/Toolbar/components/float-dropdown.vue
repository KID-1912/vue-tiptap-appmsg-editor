<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";

// 浮动下拉菜单
const floatDropdownRef = ref();
let dropdownFloat;
onMounted(() => {
  dropdownFloat = new Dropdown({ el: floatDropdownRef.value });
});

// 设置浮动
const currentFloat = ref("default");
const handleSetFloat = (float) => {
  editor.chain().focus().updateAttributes("image", { float }).run();
};

const handleUpdateFloatState = ({ editor }) => {
  let float = editor.getAttributes("image").float;
  // 无可浮动的 Node
  if (!float) {
    dropdownFloat.disable();
    currentFloat.value = "default";
    return;
  }
  dropdownFloat.enable();
  currentFloat.value = float;
};

editor.on(
  "transaction",
  throttle(handleUpdateFloatState, 240, { leading: false })
);
</script>

<template>
  <div ref="floatDropdownRef" class="dropdown dropdown-float">
    <button class="dropdown-toggle">
      <svg-icon
        :name="
          ['default', 'left'].includes(currentFloat)
            ? 'floatLeft'
            : 'floatRight'
        "
      ></svg-icon>
      <i class="icon-arrow"></i>
    </button>
    <div class="dropdown-menu">
      <div
        class="menu-item"
        :class="{ active: currentFloat === 'default' }"
        @click="handleSetFloat('default')"
      >
        <svg-icon name="floatLeft"></svg-icon>默认
      </div>
      <div
        class="menu-item"
        :class="{ active: currentFloat === 'left' }"
        @click="handleSetFloat('left')"
      >
        <svg-icon name="floatLeft"></svg-icon>左浮动
      </div>
      <div
        class="menu-item"
        :class="{ active: currentFloat === 'right' }"
        @click="handleSetFloat('right')"
      >
        <svg-icon name="floatRight"></svg-icon>右浮动
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
