describe("vue Grammars", () => {
  let grammar = null;

  beforeEach(async () => {
    await atom.packages.activatePackage("language-vue");
  });

  describe("Grammar Tests", () => {

    beforeEach(async () => {
      grammar = atom.grammars.grammarForScopeName("text.html.vue");
    });

    it("Supports 'source.sass' injection", () => {
      // https://github.com/hedefalk/atom-vue/issues/5

      let { tokens } = grammar.tokenizeLine(
`\
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
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.sass.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.sass.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.sass.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "sass",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.sass.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\n" +
          "nav\n" +
          "  ul\n" +
          "    margin: 0\n" +
          "    padding: 0\n" +
          "    list-style: none\n" +
          "\n" +
          "  li\n" +
          "    display: inline-block\n" +
          "\n" +
          "  a\n" +
          "    display: block\n" +
          "    padding: 6px 12px\n" +
          "    text-decoration: none\n",
          scopes: [ "text.html.vue", "source.sass.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.sass.embedded.html", "punctuation.definition.tag.html" ]
      });
    });

    it("supports 'source.css.scss' injection", () => {
      // https://github.com/hedefalk/atom-vue/issues/5

      let { tokens } = grammar.tokenizeLine(
`\
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
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "scss",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\n" +
          "nav {\n" +
          "  ul {\n" +
          "    margin: 0;\n" +
          "    padding: 0;\n" +
          "    list-style: none;\n" +
          "  }\n" +
          "\n" +
          "  li { display: inline-block; }\n" +
          "\n" +
          "  a {\n" +
          "    display: block;\n" +
          "    padding: 6px 12px;\n" +
          "    text-decoration: none;\n" +
          "  }\n" +
          "}\n",
         scopes: [ "text.html.vue", "source.css.scss.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.scss.embedded.html", "punctuation.definition.tag.html" ]
      });

    });

    it("supports 'source.css.postcss' injection", () => {
      // https://github.com/hedefalk/atom-vue/issues/6

      let { tokens } = grammar.tokenizeLine(
`\
<style lang="postcss">
body {
  h1 {
    magin: 10px;
  }
}
</style>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "postcss",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\nbody {\n  h1 {\n    magin: 10px;\n  }\n}\n",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.postcss.embedded.html", "punctuation.definition.tag.html" ]
      });

    });

    it("supports 'source.stylus' and 'source.css.stylus' injection", () => {
      // https://github.com/hedefalk/atom-vue/issues/17

      let { tokens } = grammar.tokenizeLine(
`\
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
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "stylus",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\n" +
          "border-radius()\n" +
          "  -webkit-border-radius: arguments\n" +
          "  -moz-border-radius: arguments\n" +
          "  border-radius: arguments\n" +
          "\n" +
          "body\n" +
          "  font: 12px Helvetica, Arial, sans-serif\n" +
          "\n" +
          "a.button\n" +
          "  border-radius: 5px\n",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.stylus.embedded.html", "punctuation.definition.tag.html" ]
      });
    });

    it("supports 'source.css.postcss.sugarss' injection", () => {
      // https://github.com/hedefalk/atom-vue/issues/64

      let { tokens } = grammar.tokenizeLine(
`\
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
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "sugarss",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\n" +
          "h1, h2\n" +
          "  font-weight: normal\n" +
          "\n" +
          "ul\n" +
          "  list-style-type: none\n" +
          "  padding: 0\n" +
          "\n" +
          "li\n" +
          "  display: inline-block\n" +
          "  margin: 0 10px\n" +
          "\n" +
          "a\n" +
          "  color: #42b983\n",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.css.postcss.sugarss.embedded.html", "punctuation.definition.tag.html" ]
      });

    });

    it("supports language-todo correctly", () => {
      // https://github.com/hedefalk/atom-vue/issues/52

      let { tokens } = grammar.tokenizeLine(
`\
<script>
// NOTE: this 'NOTE' should be highlighted
// NOTE: this 'NOTE' should be highlighted too </script>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.js.embedded.html", "meta.tag.other.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "script",
        scopes: [ "text.html.vue", "source.js.embedded.html", "meta.tag.other.html", "entity.name.tag.script.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.js.embedded.html", "meta.tag.other.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue", "source.js.embedded.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "//",
        scopes: [ "text.html.vue", "source.js.embedded.html", "comment.line.double-slash.js" ]
      });

      expect(tokens[5]).toEqual({
        value: " NOTE: this 'NOTE' should be highlighted",
        scopes: [ "text.html.vue", "source.js.embedded.html", "comment.line.double-slash.js" ]
      });

      expect(tokens[6]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue", "source.js.embedded.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "//",
        scopes: [ "text.html.vue", "source.js.embedded.html", "comment.line.double-slash.js" ]
      });

      expect(tokens[8]).toEqual({
        value: " NOTE: this 'NOTE' should be highlighted too ",
        scopes: [ "text.html.vue", "source.js.embedded.html", "comment.line.double-slash.js" ]
      });

      expect(tokens[9]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.js.embedded.html", "meta.tag.other.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "script",
        scopes: [ "text.html.vue", "source.js.embedded.html", "meta.tag.other.html", "entity.name.tag.script.html" ]
      });

      expect(tokens[11]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.js.embedded.html", "punctuation.definition.tag.html" ]
      });

    });

    it("supports Kebab-case html tags", () => {
      // https://github.com/hedefalk/atom-vue/issues/7

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <base-view>
    <div slot="page-body" class="row">
      Your content here!
    </div>
  </base-view>
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[4]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[5]).toEqual({
        value: "base-view",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[6]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "\n    ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[8]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "div",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.name.tag.block.any.html" ]
      });

      expect(tokens[10]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "slot",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[12]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[13]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[14]).toEqual({
        value: "page-body",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html" ]
      });

      expect(tokens[15]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[16]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[17]).toEqual({
        value: "class",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[18]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[19]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[20]).toEqual({
        value: "row",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html" ]
      });

      expect(tokens[21]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[22]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[23]).toEqual({
        value: "\n      Your content here!\n    ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[24]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[25]).toEqual({
        value: "div",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.name.tag.block.any.html" ]
      });

      expect(tokens[26]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[27]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[28]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[29]).toEqual({
        value: "base-view",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[30]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[31]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[32]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[33]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[34]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

    });

    it("highlight embedded expressions", () => {
      // https://github.com/hedefalk/atom-vue/issues/21
      // https://github.com/hedefalk/atom-vue/issues/30
      // https://github.com/hedefalk/atom-vue/issues/51

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <div v-if="a && b">
    <div :class="{ a: true, b: false }"></div>
    <button @click="trigger('hello')">hello</button>
  </div>
  <my-component :bar = "[0, 1, 2]"></my-component>
  <my-component :bar-foo="[0, 1, 2]"></my-component>
  <my-component :bar2foo="[0, 1, 2]"></my-component>
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[4]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[5]).toEqual({
        value: "div",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.name.tag.block.any.html" ]
      });

      expect(tokens[6]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "v-",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[8]).toEqual({
        value: "if",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[10]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "a && b",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[12]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[13]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[14]).toEqual({
        value: "\n    ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[15]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[16]).toEqual({
        value: "div",
        scopes: [ "text.html.vue", "meta.tag.any.html", "entity.name.tag.html" ]
      });

      expect(tokens[17]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.any.html" ]
      });

      expect(tokens[18]).toEqual({
        value: ":",
        scopes: [ "text.html.vue", "meta.tag.any.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[19]).toEqual({
        value: "class",
        scopes: [ "text.html.vue", "meta.tag.any.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[20]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.any.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[21]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.any.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[22]).toEqual({
        value: "{ a: true, b: false }",
        scopes: [ "text.html.vue", "meta.tag.any.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[23]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.any.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[24]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[25]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.begin.html meta.scope.between-tag-pair.html" ]
      });

      expect(tokens[26]).toEqual({
        value: "/",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[27]).toEqual({
        value: "div",
        scopes: [ "text.html.vue", "meta.tag.any.html", "entity.name.tag.html" ]
      });

      expect(tokens[28]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[29]).toEqual({
        value: "\n    ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[30]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[31]).toEqual({
        value: "button",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "entity.name.tag.inline.any.html" ]
      });

      expect(tokens[32]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html" ]
      });

      expect(tokens[33]).toEqual({
        value: "@",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[34]).toEqual({
        value: "click",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[35]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[36]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[37]).toEqual({
        value: "trigger('hello')",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[38]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[39]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[40]).toEqual({
        value: "hello",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[41]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[42]).toEqual({
        value: "button",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "entity.name.tag.inline.any.html" ]
      });

      expect(tokens[43]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[44]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[45]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[46]).toEqual({
        value: "div",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.name.tag.block.any.html" ]
      });

      expect(tokens[47]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[48]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[49]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[50]).toEqual({
        value: "my-component",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[51]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[52]).toEqual({
        value: ":",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[53]).toEqual({
        value: "bar",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[54]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue" ]
      });

      expect(tokens[55]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[56]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue" ]
      });

      expect(tokens[57]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[58]).toEqual({
        value: "[0, 1, 2]",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[59]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[60]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[61]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[62]).toEqual({
        value: "my-component",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[63]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[64]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[65]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[66]).toEqual({
        value: "my-component",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[67]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[68]).toEqual({
        value: ":",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[69]).toEqual({
        value: "bar-foo",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[70]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[71]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[72]).toEqual({
        value: "[0, 1, 2]",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[73]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[74]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[75]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[76]).toEqual({
        value: "my-component",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[77]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[78]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[79]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[80]).toEqual({
        value: "my-component",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[81]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[82]).toEqual({
        value: ":",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[83]).toEqual({
        value: "bar2foo",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[84]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[85]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[86]).toEqual({
        value: "[0, 1, 2]",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[87]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[88]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[89]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[90]).toEqual({
        value: "my-component",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[91]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[92]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[93]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[94]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[95]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[96]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });
    });

    it("highlight template expressions", () => {
      // By @Kingdaro
      // https://github.com/hedefalk/atom-vue/pull/38

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <div>
    {{ successful ? 'Yay!' : tryAgain() }}
    {{{ '<b>dangerous</b> ' + '<i>html!</i>' }}}
  </div>
</template>
`
      );

    });

    it("supports 'source.pug'", () => {
      // https://github.com/hedefalk/atom-vue/issues/23

      let { tokens } = grammar.tokenizeLine(
`\
<template lang="pug">
div.class
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.pug.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.pug.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.pug.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "pug",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.pug.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\ndiv.class\n",
        scopes: [ "text.html.vue", "source.pug.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.pug.embedded.html", "punctuation.definition.tag.html" ]
      });
    });

    it("check regexp performance", () => {
      // https://github.com/hedefalk/atom-vue/issues/24

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <svg width="10px" height="9px" viewBox="0 0 10 9" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421">
    <path d="M3.835,5.607l-1.839,-1.839l-1.215,1.214l3.089,3.089l0.607,-0.643l5.304,-5.625l-1.25,-1.178l-4.696,4.982Z" style="fill:#7ed321;"></path>
  </svg>
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[4]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[5]).toEqual({
        value: "svg",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[6]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "width",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[8]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[9]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "10px",
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html" ]
      });

      expect(tokens[11]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[12]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[13]).toEqual({
        value: "height",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[14]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[15]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[16]).toEqual({
        value: "9px",
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html" ]
      });

      expect(tokens[17]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[18]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[19]).toEqual({
        value: "viewBox",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[20]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[21]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[22]).toEqual({
        value: "0 0 10 9",
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html" ]
      });

      expect(tokens[23]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[24]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[25]).toEqual({
        value: "version",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[26]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[27]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[28]).toEqual({
        value: "1.1",
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html" ]
      });

      expect(tokens[29]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[30]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[31]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[32]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[33]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[34]).toEqual({
        value: "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421",
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html" ]
      });

      expect(tokens[35]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[36]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[37]).toEqual({
        value: "\n    ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[38]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[39]).toEqual({
        value: "path",
        scopes: [ "text.html.vue", "meta.tag.any.html", "entity.name.tag.html" ]
      });

      expect(tokens[40]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.any.html" ]
      });

      expect(tokens[41]).toEqual({
        value: "d",
        scopes: [ "text.html.vue", "meta.tag.any.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[42]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.any.html" ]
      });

      expect(tokens[43]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.any.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[44]).toEqual({
        value: "M3.835,5.607l-1.839,-1.839l-1.215,1.214l3.089,3.089l0.607,-0.643l5.304,-5.625l-1.25,-1.178l-4.696,4.982Z",
        scopes: [ "text.html.vue", "meta.tag.any.html", "string.quoted.double.html" ]
      });

      expect(tokens[45]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.any.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[46]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.any.html" ]
      });

      expect(tokens[47]).toEqual({
        value: "style",
        scopes: [ "text.html.vue", "meta.tag.any.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[48]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.any.html" ]
      });

      expect(tokens[49]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.any.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[50]).toEqual({
        value: "fill:#7ed321;",
        scopes: [ "text.html.vue", "meta.tag.any.html", "string.quoted.double.html" ]
      });

      expect(tokens[51]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.any.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[52]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[53]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.begin.html meta.scope.between-tag-pair.html" ]
      });

      expect(tokens[54]).toEqual({
        value: "/",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[55]).toEqual({
        value: "path",
        scopes: [ "text.html.vue", "meta.tag.any.html", "entity.name.tag.html" ]
      });

      expect(tokens[56]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[57]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[58]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[59]).toEqual({
        value: "svg",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[60]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[61]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[62]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[63]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[64]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[65]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });
    });

    it("support 'text.slm'", () => {
      // https://github.com/hedefalk/atom-vue/issues/31

      let { tokens } = grammar.tokenizeLine(
`\
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
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "text.slm.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "text.slm.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "text.slm.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "slm",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "text.slm.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: `
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
`,
        scopes: [ "text.html.vue", "text.slm.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "text.slm.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[13]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue", "text.slm.embedded.html" ]
      });
    });

    it("supports 'text.haml'", () => {
      // https://github.com/hedefalk/atom-vue/issues/87

      let { tokens } = grammar.tokenizeLine(
`\
<template lang="haml">
%p
  {{ greeting }} world!
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "source.haml.embedded.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "lang",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[4]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "source.haml.embedded.html" ]
      });

      expect(tokens[5]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.haml.embedded.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "haml",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "string.quoted.double.html" ]
      });

      expect(tokens[7]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "source.haml.embedded.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[8]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "\n%p\n  {{ greeting }} world!\n",
        scopes: [ "text.html.vue", "source.haml.embedded.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "punctuation.definition.tag.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "entity.name.tag.style.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "source.haml.embedded.html", "punctuation.definition.tag.html" ]
      });
    });

    it("use 'source.js.jsx' over 'source.js' in vue-template-expression", () => {

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <h3 class="method">{{$method_text this.hello()}}</h3>
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[4]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[5]).toEqual({
        value: "h3",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.name.tag.block.any.html" ]
      });

      expect(tokens[6]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "class",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.other.attribute-name.html" ]
      });

      expect(tokens[8]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.block.any.html" ]
      });

      expect(tokens[9]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "method",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html" ]
      });

      expect(tokens[11]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "string.quoted.double.html", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[12]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[13]).toEqual({
        value: "{{",
        scopes: [ "text.html.vue", "meta.brace.curly.js" ]
      });

      expect(tokens[14]).toEqual({
        value: "$method_text this.hello()",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[15]).toEqual({
        value: "}}",
        scopes: [ "text.html.vue", "meta.brace.curly.js" ]
      });

      expect(tokens[16]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[17]).toEqual({
        value: "h3",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "entity.name.tag.block.any.html" ]
      });

      expect(tokens[18]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.block.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[19]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[20]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[21]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[22]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[23]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });
    });

    it("supports '#' shorthand", () => {
      // https://github.com/hedefalk/atom-vue/pull/101

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <header #title="Hi">Hello, world!</header>
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[4]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[5]).toEqual({
        value: "header",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[6]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "#",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[8]).toEqual({
        value: "title",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "entity.other.attribute-name.html" ]
      });

      expect(tokens[9]).toEqual({
        value: "=",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "punctuation.separator.key-value.html" ]
      });

      expect(tokens[10]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.begin.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "Hi",
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue" ]
      });

      expect(tokens[12]).toEqual({
        value: '"',
        scopes: [ "text.html.vue", "meta.tag.other.html", "meta.directive.vue", "source.directive.vue", "punctuation.definition.string.end.html" ]
      });

      expect(tokens[13]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[14]).toEqual({
        value: "Hello, world!",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[15]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[16]).toEqual({
        value: "header",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[17]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[18]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[19]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[20]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[21]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });
    });

    it("fix incomplete scopes for '/>' and '</'", () => {
      // https://github.com/hedefalk/atom-vue/issues/103

      let { tokens } = grammar.tokenizeLine(
`\
<template>
  <!-- "/>" OK -->
  <!-- Both chars have punctuation.definition.tag.end.html -->
  <input />
  <!-- "/>" Not OK -->
  <!-- Only ">" has the scope -->
  <CustomInput />
</template>
`
      );

      expect(tokens[0]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[1]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[2]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[3]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[4]).toEqual({
        value: "<!--",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[5]).toEqual({
        value: ' "/>" OK ',
        scopes: [ "text.html.vue", "comment.block.html" ]
      });

      expect(tokens[6]).toEqual({
        value: "-->",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[7]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[8]).toEqual({
        value: "<!--",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[9]).toEqual({
        value: " Both chars have punctuation.definition.tag.end.html ",
        scopes: [ "text.html.vue", "comment.block.html" ]
      });

      expect(tokens[10]).toEqual({
        value: "-->",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[11]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[12]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[13]).toEqual({
        value: "input",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "entity.name.tag.inline.any.html" ]
      });

      expect(tokens[14]).toEqual({
        value: " />",
        scopes: [ "text.html.vue", "meta.tag.inline.any.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[15]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[16]).toEqual({
        value: "<!--",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[17]).toEqual({
        value: ' "/>" Not OK ',
        scopes: [ "text.html.vue", "comment.block.html" ]
      });

      expect(tokens[18]).toEqual({
        value: "-->",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[19]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[20]).toEqual({
        value: "<!--",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[21]).toEqual({
        value: ' Only ">" has the scope ',
        scopes: [ "text.html.vue", "comment.block.html" ]
      });

      expect(tokens[22]).toEqual({
        value: "-->",
        scopes: [ "text.html.vue", "comment.block.html", "punctuation.definition.comment.html" ]
      });

      expect(tokens[23]).toEqual({
        value: "\n  ",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[24]).toEqual({
        value: "<",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[25]).toEqual({
        value: "CustomInput",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[26]).toEqual({
        value: " ",
        scopes: [ "text.html.vue", "meta.tag.other.html" ]
      });

      expect(tokens[27]).toEqual({
        value: "/>",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[28]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });

      expect(tokens[29]).toEqual({
        value: "</",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.begin.html" ]
      });

      expect(tokens[30]).toEqual({
        value: "template",
        scopes: [ "text.html.vue", "meta.tag.other.html", "entity.name.tag.other.html" ]
      });

      expect(tokens[31]).toEqual({
        value: ">",
        scopes: [ "text.html.vue", "meta.tag.other.html", "punctuation.definition.tag.end.html" ]
      });

      expect(tokens[32]).toEqual({
        value: "\n",
        scopes: [ "text.html.vue" ]
      });
    });

  });
});
