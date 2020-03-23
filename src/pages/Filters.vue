<template>
  <nq-page title="Filters"
           max-width="md">
    <p>If <code>quasar-app-extension-filters</code> is installed, you have these filters for use in your templates</p>

    <h2>Numeric filters</h2>
    <nq-input-number v-model="numberModel" class="col-6" label="A number" />
    <p>{{numberModel}}</p>
    <div class="row">
    </div>

    <h2>Text filters</h2>
    <nq-input v-model="textModel" class="col-6" label="A text" />
    <div class="row">
      <dl class="col-6">
        <dt v-pre>{{ textModel | camelCase }}</dt>
        <dd>{{textModel | camelCase }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | capitalize }}</dt>
        <dd>{{textModel | capitalize }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | deburr }}</dt>
        <dd>{{textModel | deburr }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | kebabCase }}</dt>
        <dd>{{textModel | kebabCase }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | lowerCase }}</dt>
        <dd>{{textModel | lowerCase }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | lowerFirst }}</dt>
        <dd>{{textModel | lowerFirst }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | padEnd(15, '-') }}</dt>
        <dd>{{textModel | padEnd(15, '-') }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | padStart(15, '-') }}</dt>
        <dd>{{textModel | padStart(15, '-') }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | repeat(2) }}</dt>
        <dd>{{textModel | repeat(2) }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | snakeCase }}</dt>
        <dd>{{textModel | snakeCase }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | startCase }}</dt>
        <dd>{{textModel | startCase }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | toLower }}</dt>
        <dd>{{textModel | toLower }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | toUpper }}</dt>
        <dd>{{textModel | toUpper }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | trim }}</dt>
        <dd>{{textModel | trim }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | trimStart }}</dt>
        <dd>{{textModel | trimStart }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | truncate({length: 8, omission: '...'}) }}</dt>
        <dd>{{textModel | truncate({length: 8, omission: '...'}) }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | upperCase }}</dt>
        <dd>{{textModel | upperCase }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ textModel | upperFirst }}</dt>
        <dd>{{textModel | upperFirst }}</dd>
      </dl>
    </div>
    <vue-code-highlight>
    </vue-code-highlight>
  </nq-page>
</template>

<script>
export default {
  name: 'Filters',
  data () {
    return {
      numberModel: 12345.67,
      textModel: 'our planet'
    }
  }
}
</script>

<style lang="scss">
  dt {
    font-family: 'Source Code Pro', monospace, Monospaced;
  }
  dd {
    font-size: 2em;
  }
</style>
