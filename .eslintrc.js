module.exports = {
  root: true,
  env: {
    // this section will be used to determine which APIs are available to us
    // (i.e are we running in a browser environment or a node.js env)
    node: true,
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: 'module'
  },
  extends: [
    // use the recommended rule set for both plain javascript and vue
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // only allow `console.log` in development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // only allow debugger in development
    'vue/max-attributes-per-line': false, // allow multiple attributes per line
    'vue/array-bracket-spacing': 'error', // disallow spaces inside array brackets
    'vue/arrow-spacing': 'error', // add space before/after arrow function’s arrow
    'vue/block-spacing': 'error', // add space before/after inside blocks
    'vue/brace-style': 'error', // enforce brace style 1tbs
    'vue/camelcase': 'error', // enforce camelCase naming convention
    'vue/comma-dangle': ['error', 'always-multiline'], // requires trailing commas when the last element is in a different line than the closing ] or }
    'vue/component-name-in-template-casing': 'error', // enforce tag names to pascal case. E.g. <CoolComponent>
    'vue/eqeqeq': 'error', // enforce === and !== instead of their regular counterparts == and !=
    'vue/key-spacing': 'error', // enforce consistent spacing between keys and values in object literal properties
    'vue/no-boolean-default': ['error', 'default-false'], // enforces that the default value can be set but must be set to false
    'vue/object-curly-spacing': ['error', 'always'], // enforce spacing inside of braces (except {})
    'vue/space-infix-ops': 'error', // enforce spacing around infix operators (E.g. a + b)
    'vue/space-unary-ops': 'error', // enforce spaces after words unary operators (E.g. new Foo) and after/before nonwords unary operators (E.g. ++foo)
    'vue/v-on-function-call': 'error' // disallow parentheses after method calls without arguments in v-on directives
  },
  overrides: [
    {
      files: ['*.json'], // apply settings to ".json" files
      plugins: ['json'] // enable eslint-plugin-json
    }
  ]
}
