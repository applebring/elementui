<template>
<div>
<el-card class="box-card">
      <dir-transfer v-model="value2" filter-placeholder="请输入城市拼音"
    :data="data2" :titles="titles"></dir-transfer>
</el-card>
</div>
</template>
<script>
import DirTransfer from './transfermain.vue'
  export default {
    data() {
      const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data2: generateData2(),
        value2: [],
        titles:['选择成员','选中成员'],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
      };
    },
    components:{DirTransfer}
  };
</script>
