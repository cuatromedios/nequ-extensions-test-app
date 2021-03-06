<template>
  <nq-page title="&lt;nq-input&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
    <h2>Features</h2>
    <ul>
      <li>Stylized by default with outline and light grey background, and the input text size to 1.25em</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any quasar &lt;q-input&gt; attributes and slots</li>
      <li>Size: Change the tinput's text size: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code> and <code>xl</code>. If the size atribute is set to <code>xs</code> or <code>sm</code>, the <code>dense</code> attribute will be automatically set</li>
    </ul>
    <p>Model: <code>{{ theModel }}</code></p>
    <nq-form no-actions>
      <nq-input v-model="theModel" class="col-6" />
      <nq-input v-model="theModel" class="col-6"  >
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </nq-input>
      <nq-input v-model="theModel" label="Label" hint="The hint" counter maxlength="12"  class="col-6"  >
        <template v-slot:before>
          <q-icon name="event" />
        </template>
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </nq-input>
      <nq-input v-model="theModel" label="Password" type="password" class="col-6" />
      <nq-input v-model="theModel" label="Disabled" disabled class="col-6"/>
      <nq-input v-model="theModel" label="Readonly" readonly class="col-6"/>
      <nq-input v-model="theModel" label="Disabled and readonly" disabled readonly class="col-6"/>
      <nq-input v-model="theModel" label="Borderless" readonly borderless class="col-6"/>
      <nq-input v-model="theModel" label="Size: xs" class="col-6" size="sm" />
      <nq-input v-model="theModel" label="Size: sm" class="col-6" size="sm" />
      <nq-input v-model="theModel" label="Size: md" class="col-6" size="md" />
      <nq-input v-model="theModel" label="Size: lg" class="col-6" size="lg" />
      <nq-input v-model="theModel" label="Size: xl" class="col-6" size="xl" />
      <nq-input v-model="theModel" label="Size: xl" class="col-12" size="xl" dense type="textarea" />
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;nq-form no-actions&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; class=&#x22;col-6&#x22;  &#x3E;
    &#x3C;template v-slot:append&#x3E;
      &#x3C;q-icon name=&#x22;event&#x22; color=&#x22;orange&#x22; /&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-input&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Label&#x22; hint=&#x22;The hint&#x22; counter maxlength=&#x22;12&#x22;  class=&#x22;col-6&#x22;  &#x3E;
    &#x3C;template v-slot:before&#x3E;
      &#x3C;q-icon name=&#x22;event&#x22; /&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;template v-slot:append&#x3E;
      &#x3C;q-btn round dense flat icon=&#x22;add&#x22; /&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-input&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Password&#x22; type=&#x22;password&#x22; class=&#x22;col-6&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Disabled&#x22; disabled class=&#x22;col-6&#x22;/&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Readonly&#x22; readonly class=&#x22;col-6&#x22;/&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Disabled and readonly&#x22; disabled readonly class=&#x22;col-6&#x22;/&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Borderless&#x22; readonly borderless class=&#x22;col-6&#x22;/&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Size: xs&#x22; class=&#x22;col-6&#x22; size=&#x22;sm&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Size: sm&#x22; class=&#x22;col-6&#x22; size=&#x22;sm&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Size: md&#x22; class=&#x22;col-6&#x22; size=&#x22;md&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Size: lg&#x22; class=&#x22;col-6&#x22; size=&#x22;lg&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Size: xl&#x22; class=&#x22;col-6&#x22; size=&#x22;xl&#x22; /&#x3E;
  &#x3C;nq-input v-model=&#x22;theModel&#x22; label=&#x22;Size: xl&#x22; class=&#x22;col-12&#x22; size=&#x22;xl&#x22; dense type=&#x22;textarea&#x22; /&#x3E;
&#x3C;/nq-form&#x3E;
    </vue-code-highlight>
  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'Input',
  components: { FieldsMenu },
  data () {
    return {
      theModel: 'The text'
    }
  }
}
</script>
