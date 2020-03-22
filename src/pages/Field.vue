<template>
  <nq-page title="&lt;nq-field&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
    <h2>Features</h2>
    <ul>
      <li>Stylized by default</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any quasar &lt;q-field&gt; attributes and slots</li>
    </ul>

    <nq-form no-actions>
      <nq-field
        label="Select a range"
        :hint="`Slider with value ${ slider }`"
        :value="slider"
        @input="val => (val === null && (slider = 50))"
        clearable
        class="col-4"
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
        class="col-4"
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
        class="col-4"
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

      <nq-field
        :hint="`Calendar with value ${ date }`"
        label="Pick a date"
        stack-label
        class="col-6">
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
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;nq-form no-actions&#x3E;
  &#x3C;nq-field
    label=&#x22;Select a range&#x22;
    :hint=&#x22;&#x60;Slider with value ${ slider }&#x60;&#x22;
    :value=&#x22;slider&#x22;
    @input=&#x22;val =&#x3E; (val === null &#x26;&#x26; (slider = 50))&#x22;
    clearable
    class=&#x22;col-4&#x22;
  &#x3E;
    &#x3C;template v-slot:control&#x3E;
      &#x3C;q-slider
        :value=&#x22;slider&#x22;
        @change=&#x22;val =&#x3E; { slider = val }&#x22;
        :min=&#x22;0&#x22;
        :max=&#x22;100&#x22;
        label
        label-always
        class=&#x22;q-mt-lg&#x22;
      /&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-field&#x3E;

  &#x3C;nq-field
    :hint=&#x22;&#x60;Range between ${ range.min } and ${ range.max }&#x60;&#x22;
    :value=&#x22;range&#x22;
    @input=&#x22;val =&#x3E; (val === null &#x26;&#x26; (range = { min: 0, max: 100}))&#x22;
    clearable
    class=&#x22;col-4&#x22;
  &#x3E;
    &#x3C;template v-slot:control&#x3E;
      &#x3C;q-range
        :value=&#x22;range&#x22;
        @change=&#x22;val =&#x3E; { range = val }&#x22;
        :min=&#x22;0&#x22;
        :max=&#x22;100&#x22;
      /&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-field&#x3E;

  &#x3C;nq-field
    :hint=&#x22;&#x60;Knob with value ${ knob }&#x60;&#x22;
    :value=&#x22;knob&#x22;
    @input=&#x22;val =&#x3E; (val === null &#x26;&#x26; (knob = 50))&#x22;
    clearable
    class=&#x22;col-4&#x22;
  &#x3E;
    &#x3C;template v-slot:control&#x3E;
      &#x3C;div class=&#x22;full-width&#x22;&#x3E;
        &#x3C;q-knob
          :value=&#x22;knob&#x22;
          @change=&#x22;val =&#x3E; { knob = val }&#x22;
          :min=&#x22;0&#x22;
          :max=&#x22;100&#x22;
          size=&#x22;72px&#x22;
          :thickness=&#x22;1&#x22;
          color=&#x22;light-blue&#x22;
          track-color=&#x22;grey-8&#x22;
        /&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-field&#x3E;

  &#x3C;nq-field
    :hint=&#x22;&#x60;Calendar with value ${ date }&#x60;&#x22;
    label=&#x22;Pick a date&#x22;
    stack-label
    class=&#x22;col-6&#x22;&#x3E;
    &#x3C;template v-slot:control&#x3E;
      &#x3C;q-date class=&#x22;q-mt-sm full-width&#x22; minimal v-model=&#x22;date&#x22; /&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-field&#x3E;

  &#x3C;nq-field :hint=&#x22;&#x60;Time with value ${ time }&#x60;&#x22; label=&#x22;Pick a time&#x22; stack-label&#x3E;
    &#x3C;template v-slot:control&#x3E;
      &#x3C;div class=&#x22;q-mt-sm full-width&#x22;&#x3E;
        &#x3C;q-time v-model=&#x22;time&#x22; /&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/template&#x3E;
  &#x3C;/nq-field&#x3E;
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
