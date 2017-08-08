<template>
    <div class="manage-container">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'manage-container',
};
</script>

<style lang="less">
.manage-container {
}
</style>