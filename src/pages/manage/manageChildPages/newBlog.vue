<template>
  <div class="new-blog">
    <div class="edit-title">
      <div class="publish-time-wrap">
        发布时间:
        <Date-picker type="date" @on-change="handleTimeChange" v-model="publishTime" placeholder="选择日期" style="width: 200px;margin-left:10px;margin-right:50px"></Date-picker>
        添加标签:
        <Select v-model="blogTag" multiple filterable @on-change="handleTagsChange" style="width:300px;margin-left:10px;margin-right:50px">
          <Option v-for="item in blogTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
        </Select>
      </div>
      <div class="describe-wrap">
        文章标题:
        <Input v-model="blogTitle" placeholder="请输入..." style="width: 90%;margin-left:10px;"></Input>
      </div>
      <div class="describe-wrap">
        文章描述:
        <Input v-model="blogDescribe" placeholder="请输入..." style="width: 90%;margin-left:10px;"></Input>
      </div>
      <ImgUpload :resetImg="resetImg"></ImgUpload>
    </div>
    <div class="markDownEditor-wrap">
      <markdown-editor  v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
    </div>
    <Button type="info" @click = "pubishBlog">发布</Button>
  </div>
</template>

<script>
import axios from 'axios';
import ImgUpload from '@/components/imgUpload';

export default {
  name: 'new-blog',
  data() {
    return {
      content: '', // 文章内容
      resetImg: false, // 重置上传图片的内容
      configs: {
        // status: false, // 禁用底部状态栏
        initialValue: '开始你的博客之旅吧', // 设置初始值
        renderingConfig: {
          codeSyntaxHighlighting: true, // 开启代码高亮
          highlightingTheme: 'atom-one-light', // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
        },
      },
      publishTime: '', // 文章发布时间
      blogTag: [], // 文章标签
      picUrl: '', // 图片的地址
      blogTagList: [], // 已发布文章标签
      blogTitle: '', // 文章标题
      blogDescribe: '', // 文章描述
    };
  },
  components: {
    ImgUpload,
  },
  computed: {
    contentHtml() {
      return this.$refs.markdownEditor.simplemde.markdown(this.content);
    },
  },
  methods: {
    handleTimeChange(curTime) {
      this.publishTime = curTime;
      // console.log('发布时间', this.publishTime);
    },
    handleTagsChange() {
      // console.log('发布时间', this.blogTag);
    },
    resetData() {
      const self = this;
      this.content = '开始你的博客之旅吧';
      this.publishTime = '';
      this.blogTag = [];
      this.blogTitle = '';
      this.blogDescribe = '';
      this.resetImg = true;
      setTimeout(() => {
        self.resetImg = false;
      }, 100);
    },
    pubishBlog() {    
      const self = this;     
      this.ajax.post('/api/blog', {
        content: self.contentHtml,
        publishTime: self.publishTime,
        blogTitle: self.blogTitle,
        blogDescribe: self.blogDescribe,
        blogTag: self.blogTag,
      }).then((res) => {
        if (res.data.success) {
          self.$Message.success('发布成功');
          self.resetData();         
        } else {
          self.$Message.error('发布失败');  
        }       
      });
    },
  },
  created() {
    const self = this;
    this.ajax.get('/api/tags').then((res) => {
      if (res.data.success) {
        res.data.data.forEach((item) => {
          self.blogTagList.push({
            value: item.name,
          });
        });
      } else {
        self.$Message.error('获取标签失败');
      }
    });
  },
};
</script>

<style lang="less">
.new-blog {
  padding: 0 20px;
  .publish-time-wrap {
    margin-bottom: 20px;
  }
  .describe-wrap {
    margin-bottom: 20px;
  }
  .markDownEditor-wrap{
    .CodeMirror-scroll{
      max-height: 300px;
    }
  }
}
</style>