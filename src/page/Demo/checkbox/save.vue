<template>
<div>
     <el-card class="box-card">
   <div class="component-tips">
     可模糊搜索的多选框
   </div>
   <div>
    <div @click="showModal">添加</div>   
   </div>
 </el-card>
 <el-dialog title="成员授权" :visible.sync="dialogFormVisible">
  <div>已授权成员</div>
  <div class="author-user-contain">
      <el-tag  v-for="(tag,index) in origintree" :key="tag.label" :closable="true" type="primary" @close="delUser(tag,index)">
{{tag.label}}
</el-tag>
  </div>
<div>修改成员</div>
<div class="tree-container">
    <div class="tree-search">
        <el-input placeholder="" v-model="filterText"></el-input>
    </div>
    <div class="tree-modal">
        <el-row>
            <el-col :span='12' style="max-height:300px;overflow:auto;">
                <el-tree class="filter-tree" :data="data2" :props="defaultProps" node-key="id" default-expand-all :filter-node-method="filterNode" :default-checked-keys='defaultchecked' ref="tree" show-checkbox @check-change="getCheckNode">
            </el-tree>
            </el-col>
            <el-col :span='12' class="sel-tree-list">
                <ul>
                    <li v-for="(item,index) in seltree" v-if="seltree.length!=0"><span>{{item.label}}</span><i @click="delRow(item,index)">&times;</i></li>
                </ul>
            </el-col>
        </el-row>
    </div>
    <div style="text-center">
        <el-button type="primary" icon="el-icon-plus" size="small">确定添加</el-button>
    </div>
</div>
</el-dialog>
</div>

</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dialogFormVisible: false,
      testdata: [
        {
          uuid: "1",
          label: "成员一"
        },
        {
          uuid: "2",
          label: "成员二"
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      seltree: [],
      origintree:[],
      filterText: "",
    defaultchecked:[],
      data2:[],
      defaultProps: {
        children: "children",
        label: "label"
      },
    };
  },
  computed: {
    
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    showModal() {
      this.dialogFormVisible = true;
      let defaultarr=[],defaultsel=[],startsel=[];
      let data = [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              ischecked: true
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
              ischecked: true
            },
            {
              id: 6,
              label: "二级 2-2",
              ischecked: true
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
              ischecked: false
            },
            {
              id: 8,
              label: "二级 3-2",
              ischecked: false
            }
          ]
        }
      ];
       data.forEach(function(item){
          item.children.forEach(function(val){
              if(val.ischecked){
                defaultarr.push(val.id);
                defaultsel.push(val);
                startsel.push(val);
                }
          })
      });
      console.log("dfauklt",defaultarr,defaultsel);
      this.data2 = data;
      this.defaultchecked = defaultarr;
      this.seltree=startsel;
      this.origintree = defaultsel;//默认用户
    },
    delUser(item,index) {
      this.$confirm('确定删除对该系统的授权', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.origintree.splice(index,1);
          this.showModal();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    delRow(item,index){
        console.log("sjhanchulie");
        this.seltree.splice(index,1);
        this.$refs.tree.setChecked(item.id,false);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    getCheckNode() {
      this.seltree = this.$refs.tree.getCheckedNodes(true);
      
    },
    setDefaulttree() {}
  }
};
</script>
<style scoped>
.author-user-contain {
  padding: 10px;
  max-height: 90px;
  overflow: auto;
}
.author-user-contain .el-tag {
  margin: 0 10px 10px 0;
}
.tree-modal {
  max-height: 400px;
  overflow: hidden;
}
.tree-modal {
  padding: 10px;
}
.sel-tree-list {
  height: 300px;
  overflow: auto;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
}
.sel-tree-list li {
  position: relative;
  padding: 10px;
}
.sel-tree-list li > i {
  position: absolute;
  right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  line-height: 15px;
  text-align: center;
  background-color: #ddd;
  cursor: pointer;
}
</style>