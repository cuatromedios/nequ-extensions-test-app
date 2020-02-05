<template>
  <q-page class="">
    <h1>&lt;nq-input-percentage&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Shows '60 %', emmits .6</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>pattern</code> Any pattern of NumeralJS: http://numeraljs.com/ 0,0 by default</li>
    </ul>
    <h3>Model: {{ theModel }}</h3>
    <p>
      <nq-input-percentage v-model="theModel" />
    </p>
    <p>
      <nq-input-percentage pattern="0,0.00" v-model="theModel" />
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'Currency',
  data () {
    return {
      theModel: .5432
    }
  }
}
</script>
