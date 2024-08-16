<script setup>
import { Pickr } from "@/plugins/pickr/index.js";
import { editor } from "@/pages/editor/editor.js";
import { COLOR_LIST } from "@/constants/colorList.js";
import { throttle } from "lodash-es";

// 文字颜色
const colorPickerRef = ref(); // picker按钮
const colorLumpRef = ref(); // 颜色块
let picker; // 颜色选择器对象
onMounted(() => {
  // 创建颜色选择器
  picker = Pickr.create({
    el: colorPickerRef.value,
    theme: "monolith",
    useAsButton: true,
    swatches: COLOR_LIST,
    components: {
      preview: true,
      hue: true,
      interaction: {
        input: true,
        save: true,
      },
    },
    i18n: { "btn:save": "确认" },
  });

  // 保存颜色设置
  picker.on("save", (color, instance) => {
    instance.hide();
    const hexValue = color.toHEXA().toString();
    editor.chain().focus().setColor(hexValue).run();
    colorLumpRef.value.style.backgroundColor = hexValue;
  });
});

// 回显颜色状态
const handleUpdateColorState = ({ editor, transaction }) => {
  if (transaction.updated === 0) return;
  const colorValue = editor.getAttributes("textStyle").color;
  if (colorValue) {
    picker.setColor(colorValue, true);
    colorLumpRef.value.style.backgroundColor = colorValue;
  } else {
    picker.setColor(null, true);
    colorLumpRef.value.style.backgroundColor = "transparent";
  }
};
editor.on(
  "transaction",
  throttle(handleUpdateColorState, 240, { leading: false }),
);
</script>

<template>
  <button ref="colorPickerRef" class="picker color-picker">
    <svg-icon name="font"></svg-icon>
    <i ref="colorLumpRef" class="color-lump"></i>
  </button>
</template>

<style lang="less" scoped></style>
