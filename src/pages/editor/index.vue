<script setup>
import "@/assets/styles/tiptap-appmsg.css";
import FunctionBar from "./FunctionBar/functionBar.vue";
import Toolbar from "./Toolbar/toolbar.vue";
import { editor } from "./editor.js";

const editorContainerRef = ref();
onMounted(() => {
  editorContainerRef.value.insertBefore(
    editor.options.element,
    editorContainerRef.value.querySelector(".footer")
  );
});
</script>

<template>
  <div class="header">
    <function-bar />
  </div>
  <toolbar />
  <div class="editor-wrapper">
    <div ref="editorContainerRef" class="editor-container">
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
