<template>
    <div class="bread-crumb">
        <Breadcrumb>
            <Breadcrumb-item href="/manage">Manage</Breadcrumb-item>
            <Breadcrumb-item :href="path">{{pathName}}</Breadcrumb-item>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
  name: 'bread-crumb',
  computed: {
      pathName() {
        return this.$router.name;
      },
      path() {
          return `/manage/${this.$router.name}`;
      },
  },
};
</script>

<style lang="less">
.bread-crumb {
    margin: 10px 20px 20px 20px;
}
</style>