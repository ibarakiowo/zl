export default [
  {
    label: '饭店名称',
    key: 'restaurantName',
    span: 6,
    comp: {
      name: 'el-input',
      attrs: {
        placeholder: '输入饭店名称'
      },
      props: {
        value: '',
        clearable: true
      }
    }
  },
  {
    label: '饭店状态',
    key: 'state',
    span: 6,
    comp: {
      name: 'el-select',
      props: {
        value: '',
        placeholder: '选择饭店状态',
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
      props: {
        type: 'primary'
      },
      domProps: {
        innerHTML: '查询'
      }
    }
  }
]
