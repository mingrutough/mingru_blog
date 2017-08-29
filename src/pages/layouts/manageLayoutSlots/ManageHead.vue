<template>
    <div class="manage-head">
        <div class="title-wrap">
            <span class="title" style="cursor:pointer" @click="toHome">Mingru‘s Blog 后台管理系统</span>
            <Icon type="heart" />
        </div>
        <div class="admin-info">
            <span class="welcome-info">Welcome!</span>
            <Dropdown trigger="click">
                <a href="javascript:void(0)">
                    <span class="admin-name">夏明儒</span>
                    <Icon type="arrow-down-b" color="#fff" size="16px"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>更改密码</Dropdown-item>
                    <Dropdown-item>用户设置</Dropdown-item>
                    <Dropdown-item >个人主页</Dropdown-item>
                    <Dropdown-item divided>退出登录</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
        </div>
    </div>
</template>

<script>
export default {
  name: 'manage-head',
  methods: {
    toHome() {
        this.$router.push('/home');
    },
  },
};
</script>

<style lang="less">
.manage-head {
    width: 100%;
    height: 10vh;
    background: #1c2438;
    position: relative;
    .title-wrap{
        line-height: 10vh;
        padding-left: 40px;
        color: #fff;
        font-size: 25px;
    }
    .admin-info{
        position: absolute;
        top: 4vh;
        right: 80px;
        a{
            text-decoration: none;
        }
        .welcome-info{
            font-size: 14px;
            color: #eee;
            margin-right: 20px;
        }
        .admin-name{
            font-size: 16px;
            color: #fff;
            margin-right: 5px;
        }
    }

}
</style>