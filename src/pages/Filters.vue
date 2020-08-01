<template>
  <nq-page title="Filters"
           max-width="md">
    <p>If <code>quasar-app-extension-filters</code> is installed, you have these filters for use in your templates</p>

    <h2>Numeric filters</h2>
    <p>Functions taken from <a href="http://numeraljs.com/" target="_blank">NumeralJS</a>. You can use the predefined currency and percentage or use any format using NumeralJS function.</p>
    <nq-input-number v-model="numberModel" class="col-6" label="A number" pattern="0.[000]" />
    <div class="row">
      <dl class="col-6">
        <dt v-pre>{{ numberModel | currency }}</dt>
        <dd>{{ numberModel | currency }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ numberModel | percentage }}</dt>
        <dd>{{ numberModel | percentage }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ numberModel | numeral('0a') }}</dt>
        <dd>{{ numberModel | numeral('0a') }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ numberModel | numeral('0.000') }}</dt>
        <dd>{{ numberModel | numeral('0.000') }}</dd>
      </dl>
    </div>

    <h2>Text filters</h2>
    <p>Functions taken from <a href="https://lodash.com/docs/" target="_blank">Lodash</a></p>
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
    <h2>Date filters</h2>
    <p>Functions taken from <a href="https://momentjs.com/" target="_blank">MomentJS</a>. You can use any format available in MomenJS.</p>
    <div class="row">
      <dl class="col-6">
        <dt v-pre>{{ dateModel | moment('ll') }}</dt>
        <dd>{{ dateModel | moment('ll') }}</dd>
      </dl>
      <dl class="col-6">
        <dt v-pre>{{ dateModel | moment('dddd DD MMMM YYYY, h:mm:ss a') }}</dt>
        <dd>{{ dateModel | moment('dddd DD MMMM YYYY, h:mm:ss a') }}</dd>
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
  },
  computed: {
    ts () {
      return process.env.THOUSANDS_DELIMETER
    },
    dateModel () {
      return new Date()
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
