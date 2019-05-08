<template>
  <el-row class="list-query">
    <el-col :span="20" class="query-params">
      <el-row :gutter="20">
        <el-col
          v-for="(item, index) in queryData"
          :key="index"
          :span="item.span || 4">
          <div class="query-block">
            <label v-if="item.label">{{`${item.label}：`}}</label>
            <div><compack :comp="item.comp" @query="handleQuery"></compack></div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4" class="query-buttons">
      <slot></slot>
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
  },
  methods: {
    handleQuery () {
      this.$emit('query', this.filterData(this.queryData))
    },
    filterData (list) {
      let obj = {}
      list.forEach(item => {
        if (item.key && item.comp.props && item.comp.props.value) {
          obj[item.key] = item.comp.props.id || item.comp.props.value
        } else if (item.key) {
          obj[item.key] = ''
        }
      })
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-query {
    margin-bottom: $com-bp;
    .query-params {
      min-height: $mq-nw;
      .query-block {
        display: flex;
        align-items: center;
      }
    }
    .query-buttons {
      text-align: right;
    }
  }
</style>
