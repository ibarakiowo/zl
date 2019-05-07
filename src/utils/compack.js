import Vue from 'vue'
import { debounce } from './common'

// 创建子元素
const createChildElement = (comp, createElement) => {
  if (comp.name === 'el-select') {
    return comp.option.map(val => {
      return createElement(
        'el-option',
        {
          props: {
            id: val.id,
            value: val.id,
            label: val.value
          }
        }
      )
    })
  } else {
    return []
  }
}

export default Vue.component('compack', {
  props: {
    comp: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    if (this.comp.props) this.comp.props.value = ''
  },
  methods: {
    emitEvent: debounce(function () {
      this.$emit('query')
    })
  },
  render (createElement) {
    const self = this
    const childEle = createChildElement(self.comp, createElement)
    return createElement(
      self.comp.name,
      {
        attrs: self.comp.attrs,
        props: self.comp.props,
        domProps: self.comp.domProps,
        on: {
          input (val) {
            // console.log('触发了input事件 -->', val)
            self.comp.props.value = val
            if (self.comp.name !== 'el-input') self.emitEvent()
          },
          click (val) {
            // console.log('触发了click事件 -->', val)
            self.emitEvent()
          },
          clear () {
            self.emitEvent()
          }
        },
        nativeOn: {
          keyup (val) {
            if (val.keyCode === 13) {
              self.emitEvent()
            }
          }
        }
      },
      childEle
    )
  }
})
