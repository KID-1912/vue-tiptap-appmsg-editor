<script setup>
import { editor } from "@/pages/editor/editor.js";
import { Tabs } from "@/plugins/tabs/index.js";

// Tabs
const sidebarTabsRef = ref();
onMounted(() => {
  new Tabs({ el: sidebarTabsRef.value, activated: "graphic" });
});

// 图文列表数据
const graphicModule = import.meta.glob("@/templates/graphic/*.html", {
  query: "?raw",
});
const templateModule = import.meta.glob("@/templates/template.html", {
  query: "?raw",
});

// 渲染图文列表
const graphicList = ref([]);
graphicList.value = Object.keys(graphicModule).map((path, i) => {
  const graphicItem = {
    path,
    loaded: false,
    html: "",
  };
  graphicModule[path]()
    .then((graphic) => {
      graphicList.value[i].html = graphic.default;
    })
    .catch((error) => {
      console.warn(error);
    })
    .finally(() => {
      graphicList.value[i].loaded = true;
    });
  return graphicItem;
});

// 渲染模板列表
const templateList = ref([]);
templateList.value = Object.keys(templateModule).map((path, i) => {
  const templateItem = {
    path,
    loaded: false,
    html: "",
  };
  templateModule[path]()
    .then((template) => {
      templateList.value[i].html = template.default;
    })
    .catch((error) => {
      console.warn(error);
    })
    .finally(() => {
      templateList.value[i].loaded = true;
    });
  return templateItem;
});
function handleInsertTemplate(html) {
  editor.commands.clearContent(); // 清除原内容
  handleInsert(html);
}

// 插入内容
function handleInsert(html) {
  editor
    .chain()
    .focus()
    .insertContent(html, {
      parseOptions: {
        preserveWhitespace: false,
      },
    })
    .run();
}
</script>

<template>
  <div class="sidebar">
    <div ref="sidebarTabsRef" class="tabs">
      <div class="tabs-nav">
        <div class="tab-item" data-name="graphic">图文</div>
        <div class="tab-item" data-name="template">模板</div>
      </div>
      <div class="tabs-content">
        <div class="tab-pane" data-id="graphic">
          <div class="graphic-list">
            <template v-for="item in graphicList" :key="item.path">
              <div
                v-if="item.loaded"
                class="graphic-item"
                @click="handleInsert(item.html)"
                v-html="item.html"
              ></div>
            </template>
          </div>
        </div>
        <div class="tab-pane" data-id="template">
          <div class="template-list">
            <template v-for="item in templateList" :key="item.path">
              <div
                v-if="item.loaded"
                class="template-item"
                @click="handleInsertTemplate(item.html)"
                v-html="item.html"
              ></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 侧壁栏 */
.sidebar {
  position: absolute;
  width: 24vw;
  min-width: 320px;
  top: 90px;
  bottom: 0;
  left: 0;
  overflow: auto;
  /* display: none; */
  background-color: #fff;
  z-index: 2;
}

.sidebar .tabs {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar .tabs-nav {
  display: flex;
  border-bottom: 1px solid #eee;
}

.sidebar .tabs-nav .tab-item {
  flex: 1;
  padding: 15px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}

.sidebar .tabs-nav .tab-item:hover,
.sidebar .tabs-nav .tab-item.active {
  color: #07c160;
  transition: all 0.3s;
}

.sidebar .tabs-nav .tab-item.active {
  font-weight: bold;
}

.sidebar {
  .graphic-list .graphic-item,
  .template-list .template-item {
    margin: 12px;
    padding: 10px 15px;
    border-radius: 4px;
    &:hover {
      box-shadow: inset 0 0 10px 0px #ccc;
      transition: all 0.3s;
    }
  }

  .template-list .template-item {
    max-height: 500px;
    overflow-y: auto;
  }
}

.sidebar {
  :deep(.tabs-content) {
    overflow: auto;
    color: rgba(0, 0, 0, 0.9);
    font-size: 17px;
    line-height: 1.6;

    * {
      max-width: 100%;
      box-sizing: border-box !important;
    }
    p {
      clear: both;
      min-height: 1em;
    }
    > p {
      margin-top: 0;
      margin-bottom: 24px;
    }
  }
}
</style>
