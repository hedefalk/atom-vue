<!--
  Support source.sass
  https://github.com/hedefalk/atom-vue/issues/5
-->

<style lang="sass">
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
</style>

<!--
  Support source.css.scss
  https://github.com/hedefalk/atom-vue/issues/5
-->

<style lang="scss">
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
</style>

<!--
  Support source.css.postcss
  https://github.com/hedefalk/atom-vue/issues/6
-->

<style lang="postcss">
body {
  h1 {
    margin: 10px;
  }
}
</style>

<!--
  Support source.stylus and source.css.stylus
  https://github.com/hedefalk/atom-vue/issues/17
-->

<style lang="stylus">
border-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments

body
  font: 12px Helvetica, Arial, sans-serif

a.button
  border-radius: 5px
</style>

<!--
  Support source.css.postcss.sugarss
  https://github.com/hedefalk/atom-vue/issues/64
-->

<style lang="sugarss">
h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
