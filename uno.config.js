import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  theme: {
    compact: {}
  },
  presets: [
    // 基础预设，有 Tailwind Bootstrap Windi Tachyons unocss 自身的
    presetUno({
      dark: 'class'
    }),
    // 纯 css 图标  需要引入 @iconify/json（130M 或者最小化） 在 https://icones.js.org 寻找
    presetIcons(),
    // 属性化写法 text="sm white"
    presetAttributify({})
  ]
})
