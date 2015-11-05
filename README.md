# language-vue package

atom-conversion of https://github.com/vuejs/vue-syntax-highlight/commit/479672799b4162996e3c3c7e09583fb6d98e1e6c


## Working with SCSS/Sass

Since the current version of vue-loader redirects `language=x` to loader `style!css!x` and the scss-loader is using "sass" you need to remap in webpack.config.js:

```
vue: {
  loaders: {
    sass: 'style!css!sass?indentedSyntax',
    scss: 'style!css!sass'
  }
}
```

This is so that this package can support both old sass and new scss. See: https://github.com/hedefalk/atom-vue/issues/5
