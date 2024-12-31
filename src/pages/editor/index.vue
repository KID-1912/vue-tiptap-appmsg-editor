<script setup>
import "@/assets/styles/tiptap-appmsg.css";
import FunctionBar from "./FunctionBar/functionBar.vue";
import Toolbar from "./Toolbar/toolbar.vue";
import Sidebar from "./Sidebar/sidebar.vue";
import Footer from "./Footer/footer.vue";
import { editor } from "./editor.js";

const editorContainerRef = ref();
const editorFooterRef = ref();
onMounted(() => {
  editorContainerRef.value.insertBefore(editor.options.element, editorFooterRef.value.$el);
});
</script>

<template>
  <div class="header">
    <function-bar />
  </div>
  <toolbar />
  <sidebar />
  <div class="editor-wrapper">
    <div ref="editorContainerRef" class="editor-container">
      <Footer ref="editorFooterRef" />
    </div>
  </div>
</template>

<style lang="less" scoped>
/* header头部样式 */
.header {
  display: flex;
  width: 100%;
  min-width: 1400px;
  height: 50px;
  padding: 8px 8px 8px 20vw;
  position: absolute;
  top: 0;
  background-color: #fff;
  z-index: 99;
}

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
  :deep(.tiptap-editor) {
    padding: 45px 95px 115px;
    position: relative;
    margin-bottom: -69px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05);
  }
}
</style>

<style lang="less">
.modal {
  .modal-dialog {
    width: 560px;
  }

  .tabs-nav {
    display: flex;
    margin-bottom: 24px;
    border-bottom: 1px solid #eee;
  }

  .tab-item {
    padding: 4px;
    margin-bottom: -1px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  .tab-item.active {
    border-bottom-color: #07c160;
  }

  .tab-item + .tab-item {
    margin-left: 12px;
  }

  .form-item {
    margin-bottom: 15px;
  }

  .form-item label {
    display: inline-block;
    min-width: 102px;
    margin-right: 12px;
    text-align: right;
  }

  input[type="text"] {
    width: 320px;
    height: 32px;
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid #eee;
  }

  input[type="text"]:focus {
    border-color: #07c160;
  }
}
</style>
