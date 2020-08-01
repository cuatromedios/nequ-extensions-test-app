<template>
  <nq-page title="&lt;nq-select&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
    <h2>Features</h2>
    <ul>
      <li>Basically the same Quasar select but with default styles for NuQu: with outline and light grey background</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>option-label</code>: The property of the option to use as label, for example 'name'</li>
      <li><code>option-value</code>: The property of the option to use as value, for example 'id'</li>
      <li><code>emit-value</code>: If set, it will only emit the value, if not, the whole option object</li>
      <li><code>map-options</code>: If set, the selected option, will be mapped to the corresponding label to be shown in the component</li>
    </ul>
    <p>Model: <code>{{ theModel }}</code></p>
    <nq-form no-actions>
      <nq-select class="col-12" label="With emit-value" v-model="theModel" :options="options" option-label="name" option-value="id" emit-value />
      <nq-select class="col-12"  label="With emit-value and map-options" v-model="theModel" :options="options" option-label="name" option-value="id" emit-value map-options />
      <nq-select class="col-12"  label="Without emit-value" v-model="theModel" :options="options" option-label="name" option-value="id"/>
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;nq-form no-actions&#x3E;
  &#x3C;nq-select class=&#x22;col-12&#x22; label=&#x22;With emit-value&#x22; v-model=&#x22;theModel&#x22; :options=&#x22;options&#x22; option-label=&#x22;name&#x22; option-value=&#x22;id&#x22; emit-value /&#x3E;
  &#x3C;nq-select class=&#x22;col-12&#x22;  label=&#x22;With emit-value and map-options&#x22; v-model=&#x22;theModel&#x22; :options=&#x22;options&#x22; option-label=&#x22;name&#x22; option-value=&#x22;id&#x22; emit-value map-options /&#x3E;
  &#x3C;nq-select class=&#x22;col-12&#x22;  label=&#x22;Without emit-value&#x22; v-model=&#x22;theModel&#x22; :options=&#x22;options&#x22; option-label=&#x22;name&#x22; option-value=&#x22;id&#x22;/&#x3E;
&#x3C;/nq-form&#x3E;
    </vue-code-highlight>
  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'Select',
  components: { FieldsMenu },
  data () {
    return {
      theModel: null,
      options: [
        { id: 'uuid-a', name: 'Opción A', label: 'x'},
        { id: 'uuid-b', name: 'Opción B'}
      ]
    }
  }
}
</script>
