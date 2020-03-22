<template>
  <nq-page title="&lt;nq-input-currency&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
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
    <nq-form no-actions>
      <nq-input-currency v-model="theModel" class="col-6" />
      <nq-input-currency symbol="$" currency="MXN" v-model="theModel" class="col-6"  />
      <nq-input-currency currency="USD" v-model="theModel" class="col-6"  />
      <nq-input-currency symbol="€" currency="EUR" v-model="theModel" class="col-6"  />
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;nq-form no-actions&#x3E;
  &#x3C;nq-input-currency v-model=&#x22;theModel&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input-currency symbol=&#x22;$&#x22; currency=&#x22;MXN&#x22; v-model=&#x22;theModel&#x22; class=&#x22;col-6&#x22;  /&#x3E;
  &#x3C;nq-input-currency currency=&#x22;USD&#x22; v-model=&#x22;theModel&#x22; class=&#x22;col-6&#x22;  /&#x3E;
  &#x3C;nq-input-currency symbol=&#x22;&#x20AC;&#x22; currency=&#x22;EUR&#x22; v-model=&#x22;theModel&#x22; class=&#x22;col-6&#x22;  /&#x3E;
&#x3C;/nq-form&#x3E;
    </vue-code-highlight>
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
