<script setup>
import { editor } from "@/pages/editor/editor.js";
import Clipboard from "clipboard";

// 字数统计
const wordCount = ref(0);
editor.on("update", () => {
  wordCount.value = editor.getText().length;
});

// 一键复制
const btnCopyRef = ref();
let copyClipboard;
onMounted(() => {
  copyClipboard = new Clipboard(btnCopyRef.value);
  copyClipboard.on("success", function (e) {
    window.alert("复制成功");
    e.clearSelection(); // 清除默认选中复制内容
  });
  copyClipboard.on("error", function (e) {
    window.alert("浏览器不支持按钮复制，请手动ctrl+c");
    console.warn(e);
  });
});
onUnmounted(() => {
  copyClipboard?.destroy();
});
</script>

<template>
  <div class="footer">
    <div class="info">
      <!-- <div class="save-time">20:23&emsp;已保存</div> -->
      <div>
        正文字数 <span class="word-count">{{ wordCount }}</span>
      </div>
    </div>
    <div class="operation">
      <div class="btn btn-preview">预览</div>
      <div ref="btnCopyRef" class="btn btn-copy" data-clipboard-target=".tiptap.ProseMirror">
        一键复制
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 底部栏 */
.footer {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 768px;
  padding: 20px 20px 15px;
  bottom: 0;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.05);
}

.footer .info {
  color: #8d8d8d;
  display: flex;
}

.footer .info .save-time {
  margin-right: 24px;
}

.footer .operation {
  display: flex;
}

.footer .operation .btn {
  width: 96px;
  height: 34px;
  margin-left: 6px;
  line-height: 34px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #e7e7e8;
  cursor: pointer;
}

.footer .operation .btn:hover {
  background: #e7e7e8;
  transition: all 0.3s;
}
</style>
