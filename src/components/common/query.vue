<template>
  <el-row class="list-query" :gutter="20">
    <el-col
      v-for="(item, index) in queryData"
      :key="index"
      :span="item.span || 4">
      <div class="query-block">
        <label v-if="item.label">{{`${item.label}：`}}</label>
        <div><compack :comp="item.comp"></compack></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    // 查询条件数据
    queryData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-query {
    margin-bottom: $com-bp;
    .query-block {
      display: flex;
      align-items: center;
    }
  }
</style>
