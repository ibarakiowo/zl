export default [
  {
    label: '饭店名称',
    key: 'restaurantName',
    span: 6,
    comp: {
      name: 'el-input',
      attrs: {
        placeholder: '请输入饭店名称'
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
        placeholder: '请选择饭店状态'
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
