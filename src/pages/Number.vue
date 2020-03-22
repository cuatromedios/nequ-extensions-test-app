<template>
  <nq-page title="&lt;nq-input-number&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
    <h2>Features</h2>
    <ul>
      <li>Auto right aligned</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>pattern</code> Any pattern of NumeralJS: http://numeraljs.com/ for example 0,0.00</li>
      <li><code>prefix</code> Any string to put before the number</li>
      <li><code>sufix</code> Any string to put after the number</li>
    </ul>
    <h3>Emitted Model: <code>{{ theModel }}</code></h3>
    <nq-form submit-label="" cancel-label="" no-actions>
      <nq-input-number v-model="theModel" pattern="0,0" hint="Pattern: 0,0" class="col-6" />
      <nq-input-number v-model="theModel" pattern="0,0.0" hint="Pattern: 0,0.0" class="col-6" />
      <nq-input-number v-model="theModel" pattern="0,0.00" prefix="Gold"  hint="Pattern: 0,0.00, prefix: 'Gold'" class="col-6" />
      <nq-input-number v-model="theModel" pattern="0,0.000" hint="Pattern: 0,0.000" class="col-6" />
      <nq-input-number v-model="theModel" pattern="0 b" align="left" hint="Pattern: 0 b, align: left" class="col-6" />
      <nq-input-number v-model="theModel" before="! " pattern="0" hint="Pattern: 0, before: '!'" class="col-6" />
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;nq-form submit-label=&#x22;&#x22; cancel-label=&#x22;&#x22; no-actions&#x3E;
  &#x3C;nq-input-number v-model=&#x22;theModel&#x22; pattern=&#x22;0,0&#x22; hint=&#x22;Pattern: 0,0&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input-number v-model=&#x22;theModel&#x22; pattern=&#x22;0,0.0&#x22; hint=&#x22;Pattern: 0,0.0&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input-number v-model=&#x22;theModel&#x22; pattern=&#x22;0,0.00&#x22; prefix=&#x22;Gold&#x22;  hint=&#x22;Pattern: 0,0.00, prefix: &#x27;Gold&#x27;&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input-number v-model=&#x22;theModel&#x22; pattern=&#x22;0,0.000&#x22; hint=&#x22;Pattern: 0,0.000&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input-number v-model=&#x22;theModel&#x22; pattern=&#x22;0 b&#x22; align=&#x22;left&#x22; hint=&#x22;Pattern: 0 b, align: left&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input-number v-model=&#x22;theModel&#x22; before=&#x22;! &#x22; pattern=&#x22;0&#x22; hint=&#x22;Pattern: 0, before: &#x27;!&#x27;&#x22; class=&#x22;col-6&#x22; /&#x3E;
&#x3C;/nq-form&#x3E;
    </vue-code-highlight>
  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'Number',
  components: { FieldsMenu },
  data () {
    return {
      theModel: 12345.678
    }
  }
}
</script>
