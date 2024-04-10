<script setup>
import UndoButton from "./button/undo-button.vue";
import RedoButton from "./button/redo-button.vue";
import ClearFormatButton from "./button/clear-format-button.vue";
import PainterButton from "./button/painter-button.vue";
import BoldButton from "./button/bold-button.vue";
import ItalicButton from "./button/italic-button.vue";
import UnderlineButton from "./button/underline-button.vue";
import StrikeButton from "./button/strike-button.vue";
import ColorPickerButton from "./button/color-picker-button.vue";
import HighlightPickerButton from "./button/highlight-picker-button.vue";
import DividerButton from "./button/divider-button.vue";
import CodeButton from "./button/code-button.vue";
import FontsizeDropdown from "./dropdown/fontsize-dropdown.vue";
import AlignDropdown from "./dropdown/align-dropdown.vue";
import TopRowSpacingDropdown from "./dropdown/top-row-spacing-dropdown.vue";
import BottomRowSpacingDropdown from "./dropdown/bottom-row-spacing-dropdown.vue";
import LineHeightDropdown from "./dropdown/line-height-dropdown.vue";
import ListDropdown from "./dropdown/list-dropdown.vue";
import FloatDropdown from "./dropdown/float-dropdown.vue";
import EmojiDropdown from "./dropdown/emoji-dropdown.vue";
</script>

<template>
  <div class="toolbar-wrapper">
    <div id="toolbar">
      <div class="btn-group">
        <undo-button class="edit-btn" />
        <redo-button class="edit-btn" />
      </div>
      <div class="btn-group">
        <clear-format-button class="edit-btn" />
        <painter-button class="edit-btn" />
      </div>
      <div class="btn-group">
        <fontsize-dropdown class="edit-btn" />
        <bold-button class="edit-btn" />
        <italic-button class="edit-btn" />
        <underline-button class="edit-btn" />
        <strike-button class="edit-btn" />
        <color-picker-button class="edit-btn" />
        <highlight-picker-button class="edit-btn" />
      </div>
      <div class="btn-group">
        <align-dropdown class="edit-btn" />
        <top-row-spacing-dropdown class="edit-btn" />
        <bottom-row-spacing-dropdown class="edit-btn" />
        <line-height-dropdown class="edit-btn" />
      </div>
      <div class="btn-group">
        <divider-button class="edit-btn" />
        <list-dropdown class="edit-btn" />
        <float-dropdown class="edit-btn" />
        <code-button class="edit-btn" />
        <emoji-dropdown class="edit-btn" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* toolbar工具栏样式 */
.toolbar-wrapper {
  display: flex;
  width: 100%;
  min-width: 1400px;
  padding: 8px 8px 8px 20vw;
  position: absolute;
  top: 50px;
  background-color: #fafafa;
  z-index: 9;
}

#toolbar {
  display: flex;
  margin: 0 auto;
}

.btn-group {
  display: flex;
  padding: 0 6px;
}

.btn-group + .btn-group {
  border-left: 1px solid #ddd;
}

.edit-btn {
  height: 24px;
  padding: 0 3px;
  color: #4a4a51;
  font-size: 18px;
  line-height: 24px;
  border-radius: 2px;
}

.edit-btn:hover {
  background-color: rgba(0, 0, 0, 0.07);
}

.edit-btn.active {
  color: #07c160;
}

.edit-btn + .edit-btn {
  margin-left: 6px;
}

/* 下拉菜单 */
:deep(.dropdown) {
  cursor: default;

  .dropdown-toggle {
    padding: 0 2px;
    border: none;
    color: inherit;
    font-size: inherit;
    background-color: unset;
  }

  .dropdown-toggle.disabled {
    cursor: not-allowed;
    color: #aaa;
  }

  .dropdown-toggle .icon-arrow {
    display: inline-block;
    width: 0;
    height: 0px;
    border-width: 4px 4px 0 4px;
    border-style: solid;
    vertical-align: middle;
    border-color: currentColor transparent transparent transparent;
    transform: scale(0.8);
    margin-left: 4px;
  }

  .dropdown-menu {
    min-width: 120px;
    padding: 6px 0;
    line-height: 1.2;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .menu-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 6px 12px;
  }

  .menu-item:hover {
    background-color: #fafafa;
  }

  .menu-item.active {
    color: #07c160;
  }

  .menu-item svg {
    color: inherit;
    margin-right: 10px;
  }
}

/* 颜色选择器 */
:deep(.picker) {
  position: relative;
  .color-lump {
    position: absolute;
    display: inline-block;
    height: 2px;
    width: 18px;
    left: 3px;
    bottom: 2px;
    border-radius: 1px;
  }
}
</style>
