<template>
  <q-page>
    <h1>.nq-component</h1>
    <h2>Features</h2>
    <ul>
      <li>Apply .nq-component to q-field</li>
    </ul>
    <q-field
      :hint="`Slider with value ${ slider }`"
      :value="slider"
      outlined
      class="nq-component"
      @input="val => (val === null && (slider = 50))"
      clearable
    >
      <template v-slot:control>
        <q-slider
          :value="slider"
          @change="val => { slider = val }"
          :min="0"
          :max="100"
          label
          label-always
          class="q-mt-lg"
        />
      </template>
    </q-field>
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
