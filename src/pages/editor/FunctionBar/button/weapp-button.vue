<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Modal } from "@/plugins/modal/index.js";
import { Tabs } from "@/plugins/tabs/index.js";

// 小程序
// 小程序标题
let weappTitle = ref("");
// 小程序图片
let weappPicture = "";
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
    weappPicture = fileReader.result;
  };
  fileReader.readAsDataURL(file);
};
// 小程序名称
let weappName = ref("");
// 小程序AppID
let weappAppID = ref("");
// 小程序页面路径
let weappPath = ref("");
// 小程序弹窗
let weappModal;
const weappModalRef = ref();
onMounted(() => {
  weappModal = new Modal({ el: "#weapp_modal" });
  weappModal.on("save", handleSaveWeappModal);
  weappModal.on("close", onCloseWeappModal);
});
// 弹窗保存
const handleSaveWeappModal = () => {
  const activeName = weappModalTabs.activeName;
  if (!weappName.value) {
    window.alert("小程序名称不可为空");
    return;
  }
  if (!weappAppID.value) {
    window.alert("小程序AppID不可为空");
    return;
  }
  if (!weappPath.value) {
    window.alert("小程序页面路径不可为空");
    return;
  }
  if (activeName === "text") {
    if (!weappTitle.value) {
      window.alert("文字标题不可为空");
      return;
    }
    let { state } = editor;
    let weappMark = state.schema.text(weappTitle.value, [
      state.schema.marks.link.create({
        href: "",
        HTMLAttributes: {
          class: "weapp_text_link",
          "data-miniprogram-nickname": weappName.value,
          "data-miniprogram-appid": weappAppID.value,
          "data-miniprogram-path": weappPath.value,
          "data-miniprogram-type": "text",
          "data-miniprogram-servicetype": "",
          target: "",
        },
      }),
    ]);
    const tr = state.tr.insert(state.selection.from, weappMark);
    editor.view.dispatch(tr);
  }
  if (activeName === "picture") {
    if (!weappPicture) {
      window.alert("请先选择小程序图片");
      return;
    }
    editor
      .chain()
      .focus()
      .setImageLink({
        href: "",
        src: weappPicture,
        HTMLAttributes: {
          class: "weapp_image_link",
          "data-miniprogram-nickname": weappName.value,
          "data-miniprogram-appid": weappAppID.value,
          "data-miniprogram-path": weappPath.value,
          "data-miniprogram-type": "image",
          "data-miniprogram-servicetype": "",
          target: "",
        },
      })
      .enter()
      .run();
  }
  weappModal.hide();
  handleResetWeappModal();
};
// 弹窗手动关闭时
const onCloseWeappModal = () => {
  weappModalTabs.tabChange("text");
  handleResetWeappModal();
};
// 重置弹窗状态
const handleResetWeappModal = () => {
  weappTitle.value = "";
  weappPicture = "";
  weappName.value = "";
  weappAppID.value = "";
  weappPath.value = "";
};

// 插入小程序tabs
let weappModalTabs;
const weappTabsRef = ref();
onMounted(() => {
  weappModalTabs = new Tabs({
    el: weappTabsRef.value,
    activated: "text",
  });
});
</script>

<template>
  <button class="module-item weapp" @click="() => weappModal.show()">
    小程序
  </button>
  <!-- modal -->
  <Teleport to="body">
    <div id="weapp_modal" ref="weappModalRef" class="modal">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title">插入小程序</div>
          <button type="button" class="btn-close">×</button>
        </div>
        <div class="modal-body">
          <div ref="weappTabsRef" class="tabs">
            <div class="tabs-nav">
              <div class="tab-item" data-name="text">文字展示</div>
              <div class="tab-item" data-name="picture">图片展示</div>
            </div>
            <div class="tabs-content">
              <div class="tab-pane" data-id="text">
                <div class="form-item">
                  <label>文字标题</label>
                  <input
                    v-model="weappTitle"
                    class="weapp-title"
                    type="text"
                    placeholder="请输入链接标题"
                  />
                </div>
              </div>
              <div class="tab-pane" data-id="picture">
                <div class="form-item">
                  <label for="weapp_picture_uploader"> 选择图片 </label>
                  <input
                    id="weapp_picture_uploader"
                    type="file"
                    accept="image/png,image/bmp,image/jpg,image/gif"
                    @change="handleUploadPicture"
                  />
                </div>
              </div>
              <div class="form-item">
                <label>小程序名称</label>
                <input
                  v-model="weappName"
                  class="weapp-name"
                  type="text"
                  placeholder="xxxx"
                />
              </div>
              <div class="form-item">
                <label>小程序AppID</label>
                <input
                  v-model="weappAppID"
                  class="weapp-appid"
                  type="text"
                  placeholder="wxdxxxxxxxxxxxxxxx"
                />
              </div>
              <div class="form-item">
                <label>小程序页面路径</label>
                <input
                  v-model="weappPath"
                  class="weapp-path"
                  type="text"
                  placeholder="pages/index/index"
                />
              </div>
              <div class="tip">
                <a
                  href="https://www.135editor.com/books/chapter/1/366"
                  target="_blank"
                >
                  获取教程
                </a>
              </div>
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
