<template>
  <div class="user-container">
    <zl-query
      :query-data="queryData"
      @query="queryList">
    </zl-query>
    <div>
      <el-table
        :data="listData.content"
        border>
        <el-table-column
          label="图片">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.picture"
              fit="cover">
              <div slot="error">-</div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
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
            <el-button type="text" size="small" :disabled="scope.row.state == 1" @click="activeRes(scope.row)">激活</el-button>
            <el-button type="text" size="small" :disabled="scope.row.state == 2" @click="freezeRes(scope.row)">冻结</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.currPage"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total.sync="listData.totalElements">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import api from '@/api/api-restaurant'
import queryData from './restaurant-query.js'
export default {
  data () {
    return {
      queryData,
      params: {
        currPage: 1,
        pageSize: 5,
        restaurantName: '',
        state: ''
      },
      listData: {}
    }
  },
  created () {
    this.fetchList()
  },
  methods: {
    // 查询事件
    queryList (val) {
      Object.assign(this.params, val)
      this.fetchList()
    },
    // 请求列表数据
    async fetchList () {
      const res = await api.list(this.params)
      if (res) {
        this.listData = res
      }
    },
    handleSizeChange (val) {
      this.params.pageSize = val
      this.fetchList()
    },
    handleCurrentChange (val) {
      this.params.currPage = val
      this.fetchList()
    },
    // 激活用户
    async activeRes (row) {
      const res = await api.active(row.id)
      if (res) this.fetchList()
    },
    // 冻结用户
    async freezeRes (row) {
      const res = await api.freeze(row.id)
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
