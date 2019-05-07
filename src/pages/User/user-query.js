export default [
  {
    label: '名称',
    key: 'nickName',
    span: 6,
    comp: {
      name: 'el-input',
      attrs: {
        placeholder: '请输入用户名称'
      },
      props: {
        value: '',
        clearable: true
      }
    }
  },
  {
    label: '状态',
    key: 'state',
    span: 6,
    comp: {
      name: 'el-select',
      attrs: {
        placeholder: '请选择用户状态'
      },
      props: {
        id: '',
        value: '',
        clearable: true
      },
      option: [
        {
          id: 1,
          value: '正常'
        },
        {
          id: 2,
          value: '已冻结'
        }
      ]
    }
  },
  {
    span: 6,
    comp: {
      name: 'el-button',
      domProps: {
        innerHTML: '查询'
      }
    }
  }
]
