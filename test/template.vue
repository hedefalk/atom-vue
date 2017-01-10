<!--
  Support Kebab-case html tags
  https://github.com/hedefalk/atom-vue/issues/7
-->

<template>
  <base-view>
    <div slot="page-body" class="row">
      Your content here!
    </div>
  </base-view>
</template>

<!--
  Highlight embedded expressions
  https://github.com/hedefalk/atom-vue/issues/21
  https://github.com/hedefalk/atom-vue/issues/30
  https://github.com/hedefalk/atom-vue/issues/51
-->

<template>
  <div v-if="a && b">
    <div :class="{ a: true, b: false }"></div>
    <button @click="trigger('hello')">hello</button>
  </div>
  <my-component :bar = "[0, 1, 2]"></my-component>
  <my-component :bar-foo="[0, 1, 2]"></my-component>
  <my-component :bar2foo="[0, 1, 2]"></my-component>
</template>

<!--
  Highlight template expressions (by @Kingdaro)
  https://github.com/hedefalk/atom-vue/pull/38
-->

<template>
  <div>
    {{ successful ? 'Yay!' : tryAgain() }}
    {{{ '<b>dangerous</b> ' + '<i>html!</i>' }}}
  </div>
</template>

<!--
  Support source.pug
  https://github.com/hedefalk/atom-vue/issues/23
-->

<template lang="pug">
div.class
</template>

<!--
  Check regexp performance
  https://github.com/hedefalk/atom-vue/issues/24
-->

<template>
  <svg width="10px" height="9px" viewBox="0 0 10 9" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421">
    <path d="M3.835,5.607l-1.839,-1.839l-1.215,1.214l3.089,3.089l0.607,-0.643l5.304,-5.625l-1.25,-1.178l-4.696,4.982Z" style="fill:#7ed321;"></path>
  </svg>
</template>

<!--
  Support text.slm
  https://github.com/hedefalk/atom-vue/issues/31
-->

<template lang="slm">
h1 Markup examples

#content
  p This example shows you how a basic Slm file looks.

== content()

- if this.items.length
  table#items
    - for item in this.items
      tr
        td.name = item.name
        td.price = item.price
- else
  p No items found Please add some inventory.
    Thank you!

div id="footer"
  == partial('footer')
  | Copyright &copy; ${this.year} ${this.author}
</template>
