<script setup>
import { Pickr } from "@/plugins/pickr/index.js";
import { editor } from "@/pages/editor/editor.js";
import { COLOR_LIST } from "@/constants/colorList.js";
import { throttle } from "lodash-es";

// 高亮颜色
const highlightPickerRef = ref();
const colorLumpRef = ref();
let picker;
onMounted(() => {
  // 创建颜色选择器
  picker = Pickr.create({
    el: highlightPickerRef.value,
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

  // 保存高亮颜色设置
  picker.on("save", (color, instance) => {
    instance.hide();
    const hexValue = color.toHEXA().toString();
    editor.chain().focus().toggleHighlight({ color: hexValue }).run();
    colorLumpRef.value.style.backgroundColor = hexValue;
  });
});

// 高亮颜色状态回显
const handleUpdateHighlightState = ({ editor, transaction }) => {
  if (transaction.updated === 0) return;
  const colorValue = editor.getAttributes("highlight").color;
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
  throttle(handleUpdateHighlightState, 240, { leading: false }),
);
</script>

<template>
  <button ref="highlightPickerRef" class="picker highlight-picker">
    <svg-icon name="highlight"></svg-icon>
    <i ref="colorLumpRef" class="color-lump"></i>
  </button>
</template>

<style lang="less" scoped></style>
