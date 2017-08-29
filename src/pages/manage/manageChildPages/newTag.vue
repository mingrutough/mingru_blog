<template>
    <div class="new-tag">
      <span class="title">标签名称：</span>
      <Tooltip placement="top" :content="Tooltip"   >
        <Input v-model="value" placeholder="请输入..." style="width: 400px"></Input>
      </Tooltip>
      <Button type="info" style="margin-left:10px" @click="handleTagAdd" :disabled="addFlag">添加</Button>    
      <Table border :columns="columns" :data="tableData" style="margin-top:50px"></Table>  
      <div class="page-wrap">
        <Page :total="totalItems" size="small" 
              @on-change="handlePageChange"
              style="position:absolute; right:0; top: 20px;" v-show="totalItems>10"></Page>
      </div>
      <Modal
        v-model="showModal"
        title="修改标签"
        class-name='vertical-center-modal'
        @on-ok="handleTagUpdate"
        @on-cancel="">
        <Input v-model="valueModify"  style="width: 400px"></Input>
        <!--<Button type="info" style="margin-left:10px">修改</Button>            -->
      </Modal>
    </div>
</template>

<script>
export default {
  name: 'new-tag',
  data() {
    return {
      curPage: 1,
      value: '', // 新增的标签名
      showModal: false, 
      valueModify: '', // 修改的标签名
      curId: '', // 当前修改或者删除标签的id
      totalItems: 0,
      Tooltip: '如若添加多个标签请使用","（英文逗号）隔离',
      tableData: [
      ],
      columns: [
        {
          title: '标签编号',
          key: 'index',
          width: 100,
          align: 'center',          
        },
        {
          title: '标签名称',
          key: 'name',
          align: 'center',
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          width: 200,    
          render: (h, params) => h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                        },
                        style: {
                            marginRight: '5px',
                        },
                        on: {
                            click: () => {
                                this.showModal = true;
                                this.curId = params.row['_id'];
                                this.valueModify = params.row.name;
                            },
                        },
                    }, '修改'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                        },
                        on: {
                            click: () => {
                                const self = this;
                                this.$Modal.confirm({
                                  title: '确认删除标签',
                                  content: `<p style="font-size:18px;">${params.row.name}</p>`,
                                  onOk: () => {
                                    self.deleteTag(params.row['_id']);
                                  },
                                });
                            },
                        },
                    }, '删除'),
                ]),
        },
      ],
    };
  },
  computed: {
    addFlag() {
      return !this.value;
    },
  },
  methods: {
    resetData() {
      this.curPage = 1;
    },
    handlePageChange(cur) {
      this.curPage = cur;
      this.getTags();
    },
    handleTagAdd() {  // 上传标签
      const self = this;
      self.ajax.post('/api/tag', {
        tag: self.value,
      }).then((res) => {  
        if (res.data.success) {
          self.$Message.success('上传成功');
          self.value = '';
          self.getTags();
        } else {
          self.$Message.error('上传失败');
        }
      });
    },
    getTags() { // 获取标签
      const self = this;
      const param = {
        pageSize: 10,
        curPage: self.curPage,
      };
      self.ajax.get('/api/tags', {
        params: param,
      }).then((res) => {  
        if (res.data.data) {
          // console.log(res.data);
          self.tableData = res.data.data;
          self.tableData.forEach((item, index1) => {
            self.tableData[index1].index = ((self.curPage - 1) * 10) + (index1 + 1);
          });       
          self.totalItems = res.data.totalItems;
          // console.log(self.tableData);
        }
      });
    },
    deleteTag(id) { // 删除标签
      // console.log('id', typeof id);
      const self = this;
      self.ajax.delete(`/api/tag/${id}`).then((res) => {  
        if (res.data.success) {
          self.$Message.success('删除成功');
          self.value = '';
          self.getTags();
        } else {
          self.$Message.error('删除失败');
        }
      });
    },
    handleTagUpdate() {  // 修改标签
      const self = this;
      self.ajax.put('/api/tag', {
        tag: self.valueModify,
        id: self.curId,
      }).then((res) => {  
        if (res.data.success) {
          self.$Message.success('上传成功');
          self.value = '';
          self.getTags();
        } else {
          self.$Message.error(`${res.data.msg}`);
        }
      });
    },
  },
  created() {
    this.getTags();
  },
};
</script>

<style lang="less">
// .vertical-center-modal{
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       .ivu-modal{
//           top: 0;
//       }
// }
.new-tag {
  padding: 0 20px;


  .ivu-tooltip-inner{
    max-width: 300px;
  }
  .page-wrap{
    position: relative;
  }
}
</style>