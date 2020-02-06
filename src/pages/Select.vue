<template>
  <q-page>
    <h1>&lt;nq-select&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Basically the same Quasar select but with default styles for NuQu</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>option-label</code>: The property of the option to use as label, for example 'name'</li>
      <li><code>option-value</code>: The property of the option to use as value, for example 'id'</li>
      <li><code>emit-value</code>: If set, it will only emit the value, if not, the whole option</li>
    </ul>
    <p>Model: <code>{{ theModel }}</code></p>
    <p>
      <nq-select label="With emit-value" v-model="theModel" :options="options" option-label="name" option-value="id" emit-value/>
    </p>
    <p>
      <nq-select label="Without emit-value" v-model="theModel" :options="options" option-label="name" option-value="id"/>
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'Select',
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
