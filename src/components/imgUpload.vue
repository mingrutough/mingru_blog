<template>
    <div class="upload-img-wrap">
        <div class="text-title">图片上传：</div>
        <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
                <img :src="setImgUrl(item.response.hash)">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(setImgUrl(item.response.hash))"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
            </template>
            <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" ></Progress>
            </template>
        </div>
        <Upload
            ref="upload"
            :data="token"
            :show-upload-list="false"
            :on-success="handleSuccess"
            accept="image/*"
            :max-size="2048"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="http://upload.qiniu.com"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;" 
                 @click = "getUploadToken">
                <Icon type="camera" size="20"></Icon>
            </div>
        </Upload>
        <Modal v-model="visible">
            <div class="modal-head-wrap" slot="header">
                <span style="font-size:18px; font-weight:bold">图片地址为：</span>
                    <Form >
                        <Form-item style="padding-top:30px">
                            <Input type="text" v-model="imgUrl">
                            </Input>
                        </Form-item>
                    </Form>
            </div>
            <Tooltip placement="top" content="单击图片将图片地址复制到剪切板" :always="true">
                <img :src="imgUrl" v-if="visible" style="width: 100%" @click="pasteImgUrl">
            </Tooltip>
        </Modal>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'upload-img-wrap',
       data() {
            return {
                imgUrl: '',
                visible: false,
                uploadList: [],
                token: {
                    token: '',
                },
            };
        },
        methods: {
            handleView(url) {
                this.imgUrl = url;
                this.visible = true;
            },
            handleRemove(file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess(res, file) {
            },
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: `文件 ${file.name} 太大，不能超过 2M。`,
                });
            },
            handleBeforeUpload() {
            },
            getUploadToken() {
                const self = this;
                axios.get(`/api/uploadtoken?${new Date()}`).then((res) => {
                    // console.log(res.data);
                    self.token.token = res.data;
                });                
            },
            setImgUrl(part) {
                return `http://outqqzk4u.bkt.clouddn.com/${part}`; // 添加七牛云前缀
            },
            pasteImgUrl() { // 实现点击图片将图片地址复制到剪切板，待实现

            },
        },
        mounted() {
            this.uploadList = this.$refs.upload.fileList;
        },
};
</script>

<style lang="less">
.upload-img-wrap {
    display: flex;
    margin-bottom: 10px;
    .text-title{
        height: 60px;
        line-height: 60px;
        margin-right: 4px;
    }
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
}
</style>