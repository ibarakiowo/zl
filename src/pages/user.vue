<template>
  <div class="user-container">
    <zl-query
      :query-data="queryData">
    </zl-query>
    <div>
      <el-table
        :data="listData"
        border>
        <el-table-column
          prop="username"
          label="名称">
        </el-table-column>
        <el-table-column
          label="类型">
          <template slot-scope="scope">
            {{scope.row.type == 1 ? '超级管理员' : '普通用户'}}
          </template>
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            {{scope.row.state == 1 ? '正常' : '已冻结'}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" :disabled="scope.row.state == 1" @click="activeUser(scope.row)">激活</el-button>
            <el-button type="text" size="small" :disabled="scope.row.state == 2" @click="freezeUser(scope.row)">冻结</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from '@/api/api-user'
import queryData from './user.query'
export default {
  data () {
    return {
      queryData,
      listData: []
    }
  },
  created () {
    this.fetchList()
  },
  methods: {
    // 请求列表数据
    async fetchList () {
      const res = await api.list({})
      if (res) {
        this.listData = res
      }
    },
    // 激活用户
    async activeUser (row) {
      const res = await api.active(row.userId)
      if (res) this.fetchList()
    },
    // 冻结用户
    async freezeUser (row) {
      const res = await api.freeze(row.userId)
      if (res) this.fetchList()
    }
  }
}
</script>

<style lang="scss" scoped>
  table {
    border: 1px solid #000;
  }
</style>
