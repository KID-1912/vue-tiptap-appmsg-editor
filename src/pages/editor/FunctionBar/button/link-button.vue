<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Modal } from "@/plugins/modal/index.js";
import { Tabs } from "@/plugins/tabs/index.js";

// 超链接
// 链接标题
let linkTitle = ref("");
// 链接图片
let linkPicture = "";
const handleUploadPicture = (event) => {
  const uploader = event.target;
  const [file] = uploader.files;
  const fileReader = new FileReader();
  fileReader.onload = () => {
    if (fileReader.error) {
      console.warn(fileReader.error);
      window.alert("图片上传失败");
      return;
    }
    linkPicture = fileReader.result;
  };
  fileReader.readAsDataURL(file);
};
// 链接地址
let linkUrl = ref("");

// 超链接弹窗
let linkModal;
const linkModalRef = ref();
onMounted(() => {
  linkModal = new Modal({ el: linkModalRef.value });
  linkModal.on("save", handleSaveLinkModal);
  linkModal.on("close", onCloseLinkModal);
});
// 弹窗保存
const handleSaveLinkModal = () => {
  const activeName = linkModalTabs.activeName;
  if (!linkUrl.value) {
    window.alert("文章链接不可为空");
    return;
  }
  if (!linkUrl.value.match(/^(http|https):\/\/mp\.weixin\.qq\.com\/s\/.+$/)) {
    window.alert("仅支持公众号文章链接");
    return;
  }
  if (activeName === "text") {
    if (!linkTitle.value) {
      window.alert("链接标题不可为空");
      return;
    }
    let { state } = editor;
    let linkMark = state.schema.text(linkTitle.value, [
      state.schema.marks.link.create({
        href: linkUrl.value,
        HTMLAttributes: { _href: linkUrl.value },
      }),
    ]);
    const tr = state.tr.insert(state.selection.from, linkMark);
    editor.view.dispatch(tr);
  }
  if (activeName === "picture") {
    if (!linkPicture) {
      window.alert("请先选择链接图片");
      return;
    }
    editor
      .chain()
      .focus()
      .setImageLink({
        href: linkUrl.value,
        src: linkPicture,
        HTMLAttributes: {
          class: "h5_image_link",
          target: "_blank",
          linktype: "image",
          tab: "innerlink",
        },
      })
      .enter()
      .run();
  }
  linkModal.hide();
  handleResetLinkModal();
};
// 弹窗手动关闭时
const onCloseLinkModal = () => {
  linkModalTabs.tabChange("text");
  handleResetLinkModal();
};
// 重置弹窗状态
const handleResetLinkModal = () => {
  linkTitle.value = "";
  linkPicture = "";
  linkUrl.value = "";
};

// 插入超链接tabs
let linkModalTabs;
const linkTabsRef = ref();
onMounted(() => {
  linkModalTabs = new Tabs({
    el: linkTabsRef.value,
    activated: "text",
  });
  linkModalTabs.on("change", handleResetLinkModal);
});
</script>

<template>
  <button class="link module-item" @click="() => linkModal.show()">
    超链接
  </button>
  <!-- modal -->
  <Teleport to="body">
    <div id="link_modal" ref="linkModalRef" class="modal">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title">插入链接</div>
          <button type="button" class="btn-close">×</button>
        </div>
        <div class="modal-body">
          <div ref="linkTabsRef" class="tabs">
            <div class="tabs-nav">
              <div class="tab-item" data-name="text">文字展示</div>
              <div class="tab-item" data-name="picture">图片展示</div>
            </div>
            <div class="tabs-content">
              <div class="tab-pane" data-id="text">
                <div class="form-item">
                  <label>链接标题</label>
                  <input
                    v-model="linkTitle"
                    class="link-title"
                    type="text"
                    placeholder="请输入链接标题"
                  />
                </div>
              </div>
              <div class="tab-pane" data-id="picture">
                <div class="form-item">
                  <label for="link_picture_uploader"> 选择图片 </label>
                  <input
                    id="link_picture_uploader"
                    type="file"
                    accept="image/png,image/bmp,image/jpg,image/gif"
                    @change="handleUploadPicture"
                  />
                </div>
              </div>
            </div>
            <div class="form-item">
              <label>文章链接</label>
              <input
                v-model="linkUrl"
                class="link-url"
                type="text"
                placeholder="请输入http://或https://开头的公众号文章链接"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-save">确定</button>
          <button type="button" class="btn btn-close">取消</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="less" scoped></style>
