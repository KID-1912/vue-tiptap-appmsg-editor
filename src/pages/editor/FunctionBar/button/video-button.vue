<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Modal } from "@/plugins/modal/index.js";
import { Tabs } from "@/plugins/tabs/index.js";

// 视频
// 视频状态
let videoUrl = ""; // 插入视频链接

// 视频弹窗
let videoModal;
const videoModalRef = ref();
onMounted(() => {
  videoModal = new Modal({ el: videoModalRef.value });
  videoModal.on("save", handleSaveVideoModal);
  videoModal.on("close", onCloseVideoModal);
});
// 弹窗保存
const handleSaveVideoModal = () => {
  const activeName = videoModalTabs.activeName;
  if (activeName === "local") {
    if (!videoUrl) {
      window.alert("请先上传视频");
      return;
    }
    editor.chain().focus().setVideo({ src: videoUrl }).run();
  }
  if (activeName === "link") {
    if (!videoUrl) {
      window.alert("请先输入视频链接");
      return;
    }
    if (!videoUrl.match(/^(http|https):\/\/v\.qq\.com\/x\/cover\/.+$/)) {
      window.alert("仅支持腾讯视频链接");
      return;
    }
    // 解析出video id
    let videoId =
      videoUrl.match(/j_vid=(\w+)&?/)?.[1] || videoUrl.match(/\/(\w+).html/)[1];
    editor
      .chain()
      .focus()
      .setParagraph()
      .setIframe({
        src: `http://v.qq.com/txp/iframe/player.html?vid=${videoId}`,
        HTMLAttributes: {
          class: "video_iframe",
          style: `height: 325px;border-radius: 4px;pointer-events: none;`,
        },
      })
      .run();
  }
  videoModal.hide();
  handleResetVideoModal();
};
// 弹窗手动关闭时
const onCloseVideoModal = () => {
  videoModalTabs.tabChange("local");
  handleResetVideoModal();
};
// 重置弹窗状态
const handleResetVideoModal = () => {
  videoFileName.value = "";
  videoLink.value = "";
  videoUrl = "";
  videoUploaderRef.value.value = "";
};

// 视频tabs
let videoModalTabs;
const videoTabsRef = ref();
onMounted(() => {
  videoModalTabs = new Tabs({
    el: videoTabsRef.value,
    activated: "local",
  });
  videoModalTabs.on("change", handleResetVideoModal);
});

// 插入本地视频
const videoFileName = ref("");
const videoUploaderRef = ref();
const handleUploadVideo = (event) => {
  const uploader = event.target;
  const [file] = uploader.files;
  const fileReader = new FileReader();
  fileReader.onload = () => {
    if (fileReader.error) {
      console.warn(fileReader.error);
      window.alert("视频上传失败");
      return;
    }
    videoUrl = fileReader.result;
    videoFileName.value = file.name;
  };
  fileReader.readAsDataURL(file);
};

// 插入视频链接
const videoLink = ref("");
</script>

<template>
  <button class="video module-item" @click="() => videoModal.show()">
    视频
  </button>
  <!-- modal -->
  <Teleport to="body">
    <div id="video_modal" ref="videoModalRef" class="modal">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title">插入视频</div>
          <button type="button" class="btn-close">×</button>
        </div>
        <div class="modal-body">
          <div ref="videoTabsRef" class="tabs">
            <div class="tabs-nav">
              <div class="tab-item" data-name="local">本地文件</div>
              <div class="tab-item" data-name="link">视频链接</div>
            </div>
            <div class="tabs-content">
              <div class="tab-pane" data-id="local">
                <div style="display: flex; align-items: center">
                  <input
                    id="video_uploader"
                    ref="videoUploaderRef"
                    type="file"
                    accept="video/mp4, video/ogg, video/webm"
                    @change="handleUploadVideo"
                  />
                  <label for="video_uploader" class="btn-upload-video">
                    上传视频
                  </label>
                  <div class="filename">{{ videoFileName }}</div>
                </div>
                <div class="tip">
                  注：公众号文章不支持直接上传视频（请自行上传到官方公众号平台素材库），此处仅用于模拟预览
                </div>
              </div>
              <div class="tab-pane" data-id="link">
                <div class="form-item">
                  <input
                    id="video_link"
                    v-model="videoLink"
                    type="text"
                    placeholder="请输入腾讯视频链接"
                  />
                </div>
                <div class="tip">
                  注：公众号文章仅支持直接插入腾讯视频链接（部分视频受版权限制）
                </div>
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

<style lang="less" scoped>
#video_uploader {
  display: none;
}

#video_modal #video_uploader ~ .filename {
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.modal .btn-upload-video {
  display: inline-block;
  margin-right: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #e3e4e5;
  background-color: #f6f7f8;
  cursor: pointer;
}

.modal .btn-upload-video:hover {
  color: #858585;
  background-color: #eff0f2;
}

#video_modal .tip {
  margin-top: 12px;
  color: #b1b2b3;
  font-size: 12px;
}
</style>
