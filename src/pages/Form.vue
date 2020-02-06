<template>
  <q-page class="">
    <h1>&lt;q-form&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Validation</li>
    </ul>
    <hr><br>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <nq-input
        v-model="form.name"
        label="Your name *"
        readonly
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <nq-input-number
        v-model="form.age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="form.accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </q-page>
</template>

<script>
export default {
  name: 'Currency',
  data () {
    return {
      form: {
        name: null,
        age: null,
        accept: false
      }
    }
  },
  methods: {
    onSubmit () {},
    onReset () {}
  }
}
</script>
