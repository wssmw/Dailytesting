/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'vue/multi-word-component-names'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
     //在rules中添加自定义规则
     //关闭组件命名规则
    'vue/multi-word-component-names': 'off'
  }
}
