<template>
    <div class="manage-menu">
           <Menu theme="dark" :accordion="true" @on-select="handleSelectChange">
                <Menu-group title="后台管理">
                </Menu-group>        
                <Submenu name="blog">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        文章管理
                    </template>
                    <Menu-item name="new-blog">发表文章</Menu-item>
                    <Menu-item name="blog-list">已发表文章</Menu-item>
                </Submenu>
                <Submenu name="article">
                    <template slot="title">
                        <Icon type="link"></Icon>
                        外链文章管理
                    </template>
                    <Menu-item name="new-article">新建外链</Menu-item>
                    <Menu-item name="article-list">已建外链</Menu-item>
                </Submenu>
                <Menu-item name="new-tag"><Icon type="pricetags"></Icon>标签管理</Menu-item>
                <Menu-item name="setting">个人设置</Menu-item>      
                <Menu-item name="comment">评论管理</Menu-item>                                        
            </Menu>
    </div>
</template>

<script>
export default {
  name: 'manage-menu',
  data() {
      return {

      };
  },
  methods: {
    handleSelectChange(select) {
        this.$router.push(`/manage/${select}`);
    },
  },
};
</script>

<style lang="less">
.manage-menu {
    // height: 100%;
    background: #495060;
    height: 90vh;

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, 
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover,
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu),
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover{
            color: #fff;
            background: #1c2438 !important;
    }
    .ivu-menu-vertical{
        width: 100% !important; 
    }
}
</style>