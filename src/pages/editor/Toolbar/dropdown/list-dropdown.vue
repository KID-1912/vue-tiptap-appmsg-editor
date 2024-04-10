<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";
import { throttle } from "lodash-es";

// 列表下拉框
const listDropdownRef = ref();
onMounted(() => {
  new Dropdown({ el: listDropdownRef.value });
});

// 格式化列表
const typeMap = new Map([
  ["bulletList", "toggleBulletList"],
  ["orderedList", "toggleOrderedList"],
]);
const handleFormatList = (e) => {
  const listType = e.target.dataset.listType;
  const toggleCommandName = typeMap.get(listType);
  const listStyleType = e.target.dataset.listStyleType;
  if (!toggleCommandName) return;
  let chain = editor.chain().focus();
  // 开启列表类型
  if (!editor.isActive(listType)) {
    chain[toggleCommandName]().updateAttributes(listType, { listStyleType });
  }
  // 切换列表类型
  else if (editor.getAttributes(listType).listStyleType !== listStyleType) {
    chain.updateAttributes(listType, { listStyleType });
  }
  // 关闭列表类型
  else {
    chain[toggleCommandName]();
  }
  chain.run();
};
</script>

<template>
  <div ref="listDropdownRef" class="dropdown dropdown-list">
    <button class="dropdown-toggle">
      <svg-icon name="list"></svg-icon>
      <i class="icon-arrow"></i>
    </button>
    <div class="dropdown-menu" @click="handleFormatList($event)">
      <div
        class="menu-item"
        data-list-type="bulletList"
        data-list-style-type="circle"
      >
        ○ 大圆圈
      </div>
      <div
        class="menu-item"
        data-list-type="bulletList"
        data-list-style-type="disc"
      >
        ● 小黑点
      </div>
      <div
        class="menu-item"
        data-list-type="bulletList"
        data-list-style-type="square"
      >
        ■ 小方块
      </div>
      <div
        class="menu-item"
        data-list-type="orderedList"
        data-list-style-type="decimal"
      >
        1,2,3...
      </div>
      <div
        class="menu-item"
        data-list-type="orderedList"
        data-list-style-type="lower-alpha"
      >
        a,b,c...
      </div>
      <div
        class="menu-item"
        data-list-type="orderedList"
        data-list-style-type="lower-roman"
      >
        i,ii,iii...
      </div>
      <div
        class="menu-item"
        data-list-type="orderedList"
        data-list-style-type="upper-alpha"
      >
        A,B,C...
      </div>
      <div
        class="menu-item"
        data-list-type="orderedList"
        data-list-style-type="upper-roman"
      >
        I,II,III...
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
