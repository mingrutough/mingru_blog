<template>
    <div class="manage-container">
        <ManageHead></ManageHead>
        <Row>
            <Col span="4">
                <ManageMenu></ManageMenu>
            </Col>
            <Col span="20" style="height:90vh; overflow:scroll;">
                <BreadCrumb></BreadCrumb>
                <transition name="">
                    <keep-alive include="new-blog">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </Col>            
        </Row>
    </div>
</template>

<script>
import ManageHead from './manageLayoutSlots/ManageHead'; 
import ManageMenu from './manageLayoutSlots/ManageMenu'; 
import BreadCrumb from './manageLayoutSlots/BreadCrumb'; 


export default {
  name: 'manage-container',
  data() {
      return {

      };
  },
  components: {
      ManageHead,
      ManageMenu,
      BreadCrumb,
  },
};
</script>

<style lang="less">
.manage-container {
}
</style>