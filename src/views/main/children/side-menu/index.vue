<!-- @format -->

<template>
  <div>
    <Menu theme="dark" :open-names="[currentOpen]" accordion width="auto" class="menu-item" :active-name="currentActive">
      <Submenu :name="item.meta.fullPath" v-for="item in menuRoute" :key="item.name">
          <template slot="title">
              <Icon :type="item.meta.icon" />
              <span>{{item.meta.title}}</span>
          </template>
          <MenuItem :name="item2.name" v-for="item2 in item.children" :key="item2.name" :to="{name:item2.name}">
            <span>{{item2.meta.title}}</span>
          </MenuItem>
      </Submenu>
  </Menu>
  </div>
</template>

<script>
import { menuRoute } from '../../../../router/modules/module-one';
export default {
  name: 'SideMenu',
  props: {},
  data() {
    return {
      menuRoute: menuRoute
    };
  },
  computed: {
    currentOpen() {
      return this.$route.path.split('/')[1];
    },
    currentActive() {
      return this.$route.name;
    }
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
