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

  });
});
