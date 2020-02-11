<template>
  <nq-page class="">
    <template slot="aside">
      <fields-menu />
    </template>
    <h1>&lt;nq-input-currency&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Auto pattern to 0,0.00</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>symbol</code> $ by default</li>
      <li><code>currency</code> Appends a currency for example USD</li>
    </ul>
    <h3>Model: <code>{{ theModel }}</code></h3>
    <p>
      <nq-input-currency v-model="theModel" />
    </p>
    <p>
      <nq-input-currency symbol="$" currency="MXN" v-model="theModel" />
    </p>
    <p>
      <nq-input-currency currency="USD" v-model="theModel" />
    </p>
    <p>
      <nq-input-currency symbol="€" currency="EUR" v-model="theModel" />
    </p>
  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'Currency',
  components: { FieldsMenu },
  data () {
    return {
      theModel: 12345.678
    }
  }
}
</script>
