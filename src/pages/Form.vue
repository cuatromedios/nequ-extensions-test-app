<template>
  <q-page class="">
    <h1>&lt;nq-form&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Validation</li>
      <li>Uses a <code>form</code> mixin</li>
      <li>Automatically set a .row class and .q-col-gutter-md so fields may add its own col-X class</li>
      <li>Adds a default submit and cancel button (customizable labels)</li>
    </ul>
    <hr><br>
    <nq-form
      @submit="onSubmit"
      @cancel="onCancel"
      submit-label="save"
      :ready="!loading"
      :saving="saving"
    >
      <nq-input
        class="col-12"
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <nq-input-number
        class="col-4"
        v-model="form.age"
        label="Your age *"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Please type your age',
        val => val > 0 && val < 100 || 'Please type a real age'
      ]"
      />
      <nq-input-number
        class="col-8"
        v-model="form.age"
        label="Your age *"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Please type your age',
        val => val > 0 && val < 100 || 'Please type a real age'
      ]"
      />
      <q-toggle v-model="form.accept" label="I accept the license and terms" />
    </nq-form>

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
      },
      saving: false,
      loading: true
    }
  },
  mounted() {
    setTimeout(() => this.loading = false, 2000)
  },
  methods: {
    onSubmit () {
      this.saving = true
      console.log('onSubmit')
      setTimeout(() => this.saving = false, 3000)
    },
    onCancel () {
      console.log('onCancel')
    }
  }
}
</script>
