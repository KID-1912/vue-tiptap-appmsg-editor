<script setup></script>

<template>
  <div class="toolbar-wrapper">
    <div id="toolbar">
      <div class="btn-group">
        <button class="edit-btn undo">
          <svg><use href="#undo" /></svg>
        </button>
        <button class="edit-btn redo">
          <svg><use href="#redo" /></svg>
        </button>
      </div>
      <div class="btn-group">
        <button class="edit-btn clear">
          <svg><use href="#clear-format" /></svg>
        </button>
        <button class="edit-btn painter">
          <svg><use href="#brush" /></svg>
        </button>
      </div>
      <div class="btn-group">
        <div class="dropdown dropdown-size edit-btn">
          <button class="dropdown-toggle">
            <span class="size">17px</span>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div class="menu-item" data-size="12px" style="font-size: 12px">
              12px
            </div>
            <div class="menu-item" data-size="14px" style="font-size: 14px">
              14px
            </div>
            <div class="menu-item" data-size="15px" style="font-size: 15px">
              15px
            </div>
            <div class="menu-item" data-size="16px" style="font-size: 16px">
              16px
            </div>
            <div class="menu-item" data-size="17px" style="font-size: 17px">
              17px
            </div>
            <div class="menu-item" data-size="18px" style="font-size: 18px">
              18px
            </div>
            <div class="menu-item" data-size="20px" style="font-size: 20px">
              20px
            </div>
            <div class="menu-item" data-size="24px" style="font-size: 24px">
              24px
            </div>
          </div>
        </div>
        <button class="edit-btn bold">
          <svg><use href="#bold" /></svg>
        </button>
        <button class="edit-btn italic">
          <svg><use href="#italic" /></svg>
        </button>
        <button class="edit-btn underline">
          <svg><use href="#underline" /></svg>
        </button>
        <button class="edit-btn strike">
          <svg><use href="#strike" /></svg>
        </button>
        <button class="edit-btn picker color-picker">
          <svg><use href="#font" /></svg>
          <i class="colorlump"></i>
        </button>
        <button class="edit-btn picker highlight-picker">
          <svg><use href="#highlight" /></svg>
          <i class="colorlump"></i>
        </button>
      </div>
      <div class="btn-group">
        <div class="dropdown dropdown-align edit-btn">
          <button class="dropdown-toggle">
            <svg style="color: #07c160"><use href="#justify" /></svg>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div class="menu-item" data-align="left">
              <svg><use href="#left" /></svg>左对齐
            </div>
            <div class="menu-item" data-align="center">
              <svg><use href="#center" /></svg>居中对齐
            </div>
            <div class="menu-item" data-align="right">
              <svg><use href="#right" /></svg>右对齐
            </div>
            <div class="menu-item" data-align="justify">
              <svg><use href="#justify" /></svg>两端对齐
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-topRowSpacing edit-btn">
          <button class="dropdown-toggle">
            <svg><use href="#rowSpacingTop" /></svg>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div class="menu-item active" data-value="0px">0（默认）</div>
            <div class="menu-item" data-value="8px">8</div>
            <div class="menu-item" data-value="16px">16</div>
            <div class="menu-item" data-value="24px">24</div>
            <div class="menu-item" data-value="32px">32</div>
            <div class="menu-item" data-value="40px">40</div>
            <div class="menu-item" data-value="48px">48</div>
          </div>
        </div>
        <div class="dropdown dropdown-bottomRowSpacing edit-btn">
          <button class="dropdown-toggle">
            <svg><use href="#rowSpacingBottom" /></svg>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div class="menu-item" data-value="0px">0</div>
            <div class="menu-item" data-value="8px">8</div>
            <div class="menu-item" data-value="16px">16</div>
            <div class="menu-item active" data-value="24px">24（默认）</div>
            <div class="menu-item" data-value="32px">32</div>
            <div class="menu-item" data-value="40px">40</div>
            <div class="menu-item" data-value="48px">48</div>
          </div>
        </div>
        <div class="dropdown dropdown-lineHeight edit-btn">
          <button class="dropdown-toggle">
            <svg><use href="#lineHeight" /></svg>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div class="menu-item" data-value="1em">1</div>
            <div class="menu-item" data-value="1.5em">1.5</div>
            <div class="menu-item active" data-value="1.6em">1.6（默认）</div>
            <div class="menu-item" data-value="1.75em">1.75</div>
            <div class="menu-item" data-value="2em">2</div>
            <div class="menu-item" data-value="3em">3</div>
            <div class="menu-item" data-value="4em">4</div>
            <div class="menu-item" data-value="5em">5</div>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <button class="edit-btn divider">
          <svg><use href="#divider" /></svg>
        </button>
        <div class="dropdown dropdown-list edit-btn">
          <button class="dropdown-toggle">
            <svg><use href="#list" /></svg>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div
              class="menu-item"
              data-list-type="bulletList"
              data-list-style-type="circle"
            >
              ○ 大圆圈
            </div>
            <div
              class="menu-item"
              data-list-type="bulletList"
              data-list-style-type="disc"
            >
              ● 小黑点
            </div>
            <div
              class="menu-item"
              data-list-type="bulletList"
              data-list-style-type="square"
            >
              ■ 小方块
            </div>
            <div
              class="menu-item"
              data-list-type="orderedList"
              data-list-style-type="decimal"
            >
              1,2,3...
            </div>
            <div
              class="menu-item"
              data-list-type="orderedList"
              data-list-style-type="lower-alpha"
            >
              a,b,c...
            </div>
            <div
              class="menu-item"
              data-list-type="orderedList"
              data-list-style-type="lower-roman"
            >
              i,ii,iii...
            </div>
            <div
              class="menu-item"
              data-list-type="orderedList"
              data-list-style-type="upper-alpha"
            >
              A,B,C...
            </div>
            <div
              class="menu-item"
              data-list-type="orderedList"
              data-list-style-type="upper-roman"
            >
              I,II,III...
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-float edit-btn">
          <button class="dropdown-toggle">
            <svg><use href="#floatLeft" /></svg>
            <i class="icon-arrow"></i>
          </button>
          <div class="dropdown-menu">
            <div class="menu-item" data-float="default">
              <svg><use href="#floatLeft" /></svg>默认
            </div>
            <div class="menu-item" data-float="left">
              <svg><use href="#floatLeft" /></svg>左浮动
            </div>
            <div class="menu-item" data-float="right">
              <svg><use href="#floatRight" /></svg>右浮动
            </div>
          </div>
        </div>
        <button class="edit-btn code">
          <svg><use href="#code" /></svg>
        </button>
        <div class="dropdown dropdown-emoji edit-btn">
          <button class="dropdown-toggle">
            <svg><use href="#emoji" /></svg>
          </button>
          <div class="dropdown-menu">
            <div class="emoji-list"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* toolbar工具栏样式 */
.toolbar-wrapper {
  display: flex;
  width: 100%;
  min-width: 1400px;
  padding: 8px 8px 8px 20vw;
  position: absolute;
  top: 50px;
  background-color: #fafafa;
  z-index: 9;
}

#toolbar {
  display: flex;
  margin: 0 auto;
}

#toolbar .btn-group {
  display: flex;
  padding: 0 6px;
}

#toolbar .btn-group + .btn-group {
  border-left: 1px solid #ddd;
}

#toolbar .edit-btn {
  height: 24px;
  padding: 0 3px;
  color: #4a4a51;
  font-size: 18px;
  line-height: 1;
  border-radius: 2px;
}

#toolbar .edit-btn:hover {
  background-color: rgba(0, 0, 0, 0.07);
}

#toolbar .edit-btn.active {
  color: #07c160;
}

#toolbar .edit-btn + .edit-btn {
  margin-left: 6px;
}
</style>
