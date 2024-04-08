<script setup>
import "@/assets/styles/tiptap-appmsg.css";
import Toolbar from "./Toolbar/toolbar.vue";
import { createEditor } from "./editor.js";

onMounted(() => {
  const $editor = document.querySelector(".tiptap-editor");
  createEditor($editor);
});
</script>

<template>
  <toolbar />
  <div class="editor-wrapper">
    <div class="editor-container">
      <div class="tiptap-editor" style="font-size: 17px"></div>
      <div class="footer">
        <div class="info">
          <!-- <div class="save-time">20:23&emsp;已保存</div> -->
          <div>正文字数 <span class="word-count">0</span></div>
        </div>
        <div class="operation">
          <div class="btn btn-preview">预览</div>
          <div class="btn btn-copy" data-clipboard-target=".tiptap.ProseMirror">
            一键复制
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 编辑器 */
.editor-wrapper {
  height: 100%;
  /* overflow: auto; */
  padding-top: 120px;
  padding-left: 20vw;
}

.editor-container {
  position: relative;
  width: 768px;
  margin: 0 auto;
  z-index: 1;
}

.tiptap-editor {
  padding: 45px 95px 115px;
  position: relative;
  margin-bottom: -69px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05);
}
</style>
