<template>
  <q-page>
    <h1>&lt;nq-input&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Stylized by default</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any quasar &lt;q-input&gt; attributes and slots</li>
    </ul>
    <p>Model: {{ theModel }}</p>
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
  </q-page>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      theModel: 'The text'
    }
  }
}
</script>
