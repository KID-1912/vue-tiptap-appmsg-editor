<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";

// emoji表情
const emojiDropdownRef = ref();
onMounted(() => {
  new Dropdown({ el: emojiDropdownRef.value });
});

// 插入表情
const handleInsertEmoji = (index) => {
  const emojiHTML = `
    <img
      src="https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/Expression/Expression_${
        +index + 1
      }@2x.png"
      style="width: 20px;background-size: cover;"
    >`;
  editor
    .chain()
    .focus()
    .insertContent(emojiHTML, {
      parseOptions: {
        preserveWhitespace: false,
      },
    })
    .run();
};
</script>

<template>
  <div ref="emojiDropdownRef" class="dropdown dropdown-emoji">
    <button class="dropdown-toggle">
      <svg-icon name="emoji"></svg-icon>
    </button>
    <div class="dropdown-menu">
      <div class="emoji-list">
        <div
          v-for="i in 105"
          :key="i"
          class="emoji-item"
          @click="handleInsertEmoji(i)"
        >
          <div
            class="icon-emoji"
            :style="{ backgroundPositionY: `${-100 * i}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 表情菜单 start*/
.dropdown-emoji .emoji-list {
  display: flex;
  flex-wrap: wrap;
  width: 408px;
  max-height: 440px;
  padding: 6px 12px;
  overflow-y: auto;
}

.dropdown-emoji .emoji-item {
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-emoji .emoji-item:hover {
  transition: all 0.3s;
  background-color: rgba(0 0 0 / 5%);
}

.dropdown-emoji .emoji-item .icon-emoji {
  width: 32px;
  height: 32px;
  background-size: 100% auto;
  background-image: url("@/assets/images/sprite/emoji_sprite.png");
}
</style>
