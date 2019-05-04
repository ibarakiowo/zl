<template>
  <div class="user-container">
    <div>用户列表</div>
    <table>
      <thead>
        <th>名称</th>
        <th>类型</th>
        <th>状态</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listData" :key="index">
          <td>{{item.username}}</td>
          <td>{{item.type}}</td>
          <td>{{item.state}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/api/api-user'
export default {
  data () {
    return {
      listData: []
    }
  },
  created () {
    this.fetchList()
  },
  methods: {
    // 请求列表数据
    fetchList () {
      api.list({}).then(res => {
        if (res) {
          this.listData = res
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  table {
    border: 1px solid #000;
  }
</style>
