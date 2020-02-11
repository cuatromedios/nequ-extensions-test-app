<template>
  <nq-page>
    <template slot="aside">
      <fields-menu />
    </template>
    <h1>&lt;nq-input&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Stylized by default</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any quasar &lt;q-input&gt; attributes and slots</li>
    </ul>
    <p>Model: <code>{{ theModel }}</code></p>
    <p>
      <nq-input v-model="theModel" />
    </p>
    <p>
      <nq-input v-model="theModel" >
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </nq-input>
    </p>
    <p>
      <nq-input v-model="theModel" label="Label" hint="The hint" counter maxlength="12" >
        <template v-slot:before>
          <q-icon name="event" />
        </template>
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </nq-input>
    </p>
    <p>
      <nq-input v-model="theModel" label="Password" type="password" >
      </nq-input>
    </p>
    <p>
      <nq-input v-model="theModel" label="Disabled" disabled />
    </p>
    <p>
      <nq-input v-model="theModel" label="Readonly" readonly />
    </p>
    <p>
      <nq-input v-model="theModel" label="Disabled and readonly" disabled readonly />
    </p>
    <p>
      <nq-input v-model="theModel" label="Borderless" readonly borderless/>
    </p>
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
