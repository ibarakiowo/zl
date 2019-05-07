export default [
  {
    label: '用户名',
    span: 6,
    comp: {
      name: 'el-input',
      attrs: {
        placeholder: '请输入用户名'
      },
      props: {
        value: '',
        clearable: true
      }
    }
  },
  {
    label: '状态',
    span: 6,
    comp: {
      name: 'el-select',
      props: {
        value: '',
        clearable: true
      },
      child: {
        name: 'el-option',
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
  },
  {
    span: 6,
    comp: {
      name: 'el-button',
      domProps: {
        innerHTML: '新建'
      }
    }
  }
]
