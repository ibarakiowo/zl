import Vue from 'vue'

export default Vue.component('compack', {
  props: {
    // 组件数据
    comp: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  render (createElement) {
    const self = this
    let child = []
    if (self.comp.child && self.comp.child.name) {
      child = self.comp.child.option.map(val => {
        return createElement(
          self.comp.child.name,
          {
            props: {
              id: val.id,
              value: val.value
            }
          }
        )
      })
    }
    return createElement(
      self.comp.name,
      {
        attrs: self.comp.attrs,
        props: self.comp.props,
        domProps: self.comp.domProps,
        on: {
          input (val) {
            self.comp.props.value = val
          }
        }
      },
      child
    )
  }
})
