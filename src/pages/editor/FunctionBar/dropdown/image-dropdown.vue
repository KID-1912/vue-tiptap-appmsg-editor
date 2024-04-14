<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Dropdown } from "@/plugins/dropdown/index.js";

// 图片
const imageDropdownRef = ref();
onMounted(() => {
  new Dropdown({ el: imageDropdownRef.value });
});

// 插入本地图片
const handleUploadImage = (event) => {
  const $uploader = event.target;
  const [file] = $uploader.files;
  const fileReader = new FileReader();
  fileReader.onload = () => {
    if (fileReader.error) {
      console.warn(fileReader.error);
      window.alert("图片上传失败");
      return;
    }
    const dataString = fileReader.result;
    editor
      .chain()
      .focus()
      .setImage({
        src: dataString,
      })
      .run();
    $uploader.value = "";
  };
  fileReader.readAsDataURL(file);
};

// 插入链接图片
const handleInsertImageLink = () => {
  const imageUrl = window.prompt("请输入图片链接", "");
  try {
    new URL(imageUrl);
  } catch (error) {
    console.warn(error);
    return;
  }
  editor.chain().focus().setImage({ src: imageUrl }).run();
};
</script>

<template>
  <div ref="imageDropdownRef" class="dropdown-image dropdown">
    <div class="dropdown-toggle">
      <button class="module-item">图片<i class="icon-arrow"></i></button>
    </div>
    <div class="dropdown-menu">
      <div class="menu-item">
        本地图片<input
          id="image_uploader"
          type="file"
          accept="image/bmp, image/png, image/jpeg, image/jpg, image/gif, image/webp"
          @change="handleUploadImage($event)"
        />
      </div>
      <div class="menu-item">
        <div id="image_link" @click="handleInsertImageLink">图片链接</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#image_uploader {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
