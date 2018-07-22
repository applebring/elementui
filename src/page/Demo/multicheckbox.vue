<template>
<div>
     <el-card class="box-card">
   <div class="component-tips">
     可模糊搜索的多选框
   </div>
   <div>
    <div @click="showModal">添加</div>   
    <div @click="jumpto">测试partclejs</div>
   </div>
 </el-card>
 <el-dialog title="成员授权" :visible.sync="dialogFormVisible">
  <checkbox-tree :dataarr="data2" :origintree="origintree"></checkbox-tree>
</el-dialog>
</div>

</template>
<script>
import echarts from "echarts";
import checkboxTree from './checkbox/treecheckbox.vue'
export default {
  data() {
    return {
      dialogFormVisible: false,
      seltree: [],
      origintree:[],
      filterText: "",
    defaultchecked:[],
      data2:[],//初始数据
      defaultProps: {
        children: "children",
        label: "label"
      },
    };
  },
  components:{checkboxTree},
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
    jumpto(){
        this.$router.push("/particle");  
    }
  }
};
</script>
