<script setup>
import { onMounted } from "vue";
import "@/assets/styles/tiptap-appmsg.css";
import Toolbar from "./Toolbar/toolbar.vue";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "tiptap-extension-image";
import Video from "tiptap-extension-video";
import Iframe from "tiptap-extension-iframe";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontSize from "tiptap-extension-font-size";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Link from "tiptap-extension-link";
import CodeBlock from "@tiptap/extension-code-block";
import TrailingNode from "tiptap-extension-trailing-node";
import Section from "tiptap-extension-section";
import ImageLink from "tiptap-extension-image-link";
import Hr from "tiptap-extension-hr";
import BulletList from "tiptap-extension-bullet-list";
import OrderedList from "tiptap-extension-ordered-list";
import LineHeight from "tiptap-extension-line-height";
import Float from "tiptap-extension-float";
import Margin from "tiptap-extension-margin";
import Resizable from "tiptap-extension-resizable";

onMounted(() => {
  new Editor({
    element: document.querySelector(".tiptap-editor"),
    extensions: [
      TrailingNode,
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        codeBlock: false,
      }),
      Underline,
      TextStyle,
      Color,
      FontSize,
      TextAlign.configure({
        types: ["paragraph"],
        defaultAlignment: "justify",
      }),
      Highlight.configure({ multicolor: true }),
      Link.configure({ openOnClick: false, HTMLAttributes: { rel: "" } }),
      CodeBlock.configure({ HTMLAttributes: { class: "code-snippet" } }),
      Resizable.configure({ types: ["image", "video"] }),
      Image.configure({ inline: true, allowBase64: true }),
      Video.configure({ allowBase64: true }),
      Iframe,
      Section,
      ImageLink,
      Hr,
      BulletList.configure({ HTMLAttributes: { class: "list-paddingleft-1" } }),
      OrderedList.configure({
        HTMLAttributes: { class: "list-paddingleft-1" },
      }),
      LineHeight,
      Float,
      Margin,
    ],
  });
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
