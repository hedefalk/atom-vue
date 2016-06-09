# Vue component support in Atom

Adds syntax highlighting and snippets to Vue component files in Atom.

Originally [converted](http://flight-manual.atom.io/hacking-atom/sections/converting-from-textmate/) from [vuejs/vue-syntax-highlight](https://github.com/vuejs/vue-syntax-highlight/tree/479672799b4162996e3c3c7e09583fb6d98e1e6c).

## Working with SCSS/Sass

Since vue-loader redirects `language=x` to loader `style!css!x` and sass-loader is using **SCSS** as default, you need to remap them in *webpack.config.js*:

```
vue: {
  loaders: {
    sass: 'style!css!sass?indentedSyntax',
    scss: 'style!css!sass'
  }
}
```

This is so that this package can support both old Sass and new SCSS. Refer to [hedefalk/atom-vue#5](https://github.com/hedefalk/atom-vue/issues/5) and [the official solution](https://github.com/vuejs-templates/webpack/blob/45c5ee5531a6f649c21aa2ec05472fb459247927/template/build/utils.js#L37-L38) for more info.
