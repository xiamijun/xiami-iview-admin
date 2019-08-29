<!-- @format -->

<template>
  <div>
    <Menu theme="dark" :open-names="['1']" accordion width="auto" class="menu-item" :class="{'collapsed-menu': isCollapsed}">
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper" />
              <span>1</span>
          </template>
          <MenuItem name="1-1"><span>1-1</span></MenuItem>
          <MenuItem name="1-2"><span>1-2</span></MenuItem>
          <MenuItem name="1-3"><span>1-3</span></MenuItem>
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-people" />
              2
          </template>
          <MenuItem name="2-1"><span>2-1</span></MenuItem>
          <MenuItem name="2-2"><span>2-2</span></MenuItem>
      </Submenu>
      <Submenu name="3">
          <template slot="title">
              <Icon type="ios-stats" />
              3
          </template>
          <MenuItem name="3-1"><span>1-1</span></MenuItem>
          <MenuItem name="3-2"><span>3-2</span></MenuItem>
          <MenuItem name="3-3"><span>3-3</span></MenuItem>
          <MenuItem name="3-4"><span>3-4</span></MenuItem>
          <MenuItem name="3-5"><span>3-5</span></MenuItem>
      </Submenu>
  </Menu>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    isCollapsed: {
      type: Boolean
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.menu-item span {
  display: inline-block;
  overflow: hidden;
  // width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
}
</style>
