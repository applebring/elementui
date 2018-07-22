<template>
<div>
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
                <el-tree class="filter-tree" :data="dataarr" :props="defaultProps" node-key="id" default-expand-all :filter-node-method="filterNode" :default-checked-keys='defaultchecked' ref="tree" show-checkbox @check-change="getCheckNode">
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
</div>

</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dialogFormVisible: false,
      filterText: "",
      seltree:[],
    defaultchecked:[],
      defaultProps: {
        children: "children",
        label: "label"
      },
    };
  },
  props:{
        dataarr: {//初始数据
        type: Array,
        default() {
          return [];
        }
      },
      origintree:{//已经保留在数据库中的数据，即已选中数据
      type:Array,
      default(){
          return [];
      }
      }
      },
  mounted(){
      console.log("thisdata",this.data);
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
//   computed:{

//   },
mounted(){
    let defaultarr=[],defaultsel=[],startsel=[];
         this.dataarr.forEach(function(item){
          item.children.forEach(function(val){
              if(val.ischecked){
                defaultarr.push(val.id);
                defaultsel.push(val);
                startsel.push(val);
                }
          })
      });
    this.defaultchecked = defaultarr;
      this.seltree=defaultarr;
},
  methods: {
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
        //   this.showModal();
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
      
    }
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