<template>
  <nq-page title="&lt;nq-input-percentage&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
    <h2>Features</h2>
    <ul>
      <li>Shows <strong>'60 %'</strong>, emmits <strong>0.6</strong></li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>pattern</code> Any pattern of NumeralJS: http://numeraljs.com/ 0,0 by default</li>
    </ul>
    <h3>Model: <code>{{ theModel }}</code></h3>
    <nq-form no-actions>
      <nq-input-percentage class="col-6" v-model="theModel" />
      <nq-input-percentage class="col-6" pattern="0,0.00" v-model="theModel" />
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;nq-form no-actions&#x3E;
  &#x3C;nq-input-percentage class=&#x22;col-6&#x22; v-model=&#x22;theModel&#x22; /&#x3E;
  &#x3C;nq-input-percentage class=&#x22;col-6&#x22; pattern=&#x22;0,0.00&#x22; v-model=&#x22;theModel&#x22; /&#x3E;
&#x3C;/nq-form&#x3E;
    </vue-code-highlight>
  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'Percentage',
  components: { FieldsMenu },
  data () {
    return {
      theModel: .5432
    }
  }
}
</script>
