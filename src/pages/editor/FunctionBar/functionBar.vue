<script setup>
import ImageDropdown from "./dropdown/image-dropdown.vue";
import VideoButton from "./button/video-button.vue";
import LinkButton from "./button/link-button.vue";
import WeappButton from "./button/weapp-button.vue";
</script>

<template>
  <div class="modules-wrapper">
    <ul class="module-group left">
      <image-dropdown />
      <video-button />
      <link-button />
    </ul>
    <ul class="module-group main">
      <weapp-button />
      <button class="module-item disabled">音媒体</button>
      <button class="module-item disabled">模板</button>
      <button class="module-item disabled">视频号</button>
      <button class="module-item disabled">公众号</button>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.modules-wrapper {
  margin: 0 auto;
  display: flex;
}

.module-group {
  display: flex;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
}

.module-group.left {
  margin-right: 24px;
}

:deep(.dropdown) {
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
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 6px 12px;
    cursor: pointer;
    &:hover {
      background-color: #fafafa;
    }
  }
}

:deep(.module-item) {
  padding: 8px 12px;
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    transition: all 0.2s;
  }
}
</style>
