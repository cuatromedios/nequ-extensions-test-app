<template>
  <nq-page max-width="md">
    <template slot="aside">
      <fields-menu />
    </template>
    <h1>&lt;nq-field&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Stylized by default</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any quasar &lt;q-field&gt; attributes and slots</li>
    </ul>

    <div class="q-gutter-md column" style="max-width: 300px">
      <nq-field
        label="Select a range"
        :hint="`Slider with value ${ slider }`"
        :value="slider"
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
      </nq-field>

      <nq-field
        :hint="`Range between ${ range.min } and ${ range.max }`"
        :value="range"
        @input="val => (val === null && (range = { min: 0, max: 100}))"
        clearable
      >
        <template v-slot:control>
          <q-range
            :value="range"
            @change="val => { range = val }"
            :min="0"
            :max="100"
          />
        </template>
      </nq-field>

      <nq-field
        :hint="`Knob with value ${ knob }`"
        :value="knob"
        @input="val => (val === null && (knob = 50))"
        clearable
      >
        <template v-slot:control>
          <div class="full-width">
            <q-knob
              :value="knob"
              @change="val => { knob = val }"
              :min="0"
              :max="100"
              size="72px"
              :thickness="1"
              color="light-blue"
              track-color="grey-8"
            />
          </div>
        </template>
      </nq-field>

      <nq-field :hint="`Calendar with value ${ date }`" label="Pick a date" stack-label>
        <template v-slot:control>
          <q-date class="q-mt-sm full-width" minimal v-model="date" />
        </template>
      </nq-field>

      <nq-field :hint="`Time with value ${ time }`" label="Pick a time" stack-label>
        <template v-slot:control>
          <div class="q-mt-sm full-width">
            <q-time v-model="time" />
          </div>
        </template>
      </nq-field>
    </div>

  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'Input',
  components: { FieldsMenu },
  data () {
    return {
      slider: 50,
      range: {
        min: 10,
        max: 30
      },

      knob: 50,

      time: '',
      date: ''
    }
  }
}
</script>
