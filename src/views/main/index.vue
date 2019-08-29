<!-- @format -->

<template>
  <div>

    <Sider class="sider" hide-trigger collapsible ref="side1" :collapsed-width="70" v-model="isCollapsed">
      <SideMenu :isCollapsed="isCollapsed"></SideMenu>
    </Sider>

    <Layout class="layout">
        <Header class="header">
          <Icon @click.native="collapsedSider" type="md-menu" size="24"></Icon>
        </Header>
        <Content>
            <router-view></router-view>
        </Content>
        <MyFooter></MyFooter>
    </Layout>
    
    
  </div>
</template>
<script>
import SideMenu from './children/side-menu/index';
import MyFooter from '@/components/footer';
import MyHeader from '@/components/header';
export default {
  name: 'Main',
  components: {
    SideMenu,
    MyFooter,
    MyHeader
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style lang="less" scoped>
.sider {
  position: fixed;
  height: 100vh;
  left: 0;
  overflow: auto;
}
.layout {
  margin-left: 200px;
}
.header {
  background: #fff;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);
}
</style>
