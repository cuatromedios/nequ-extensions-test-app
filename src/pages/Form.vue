<template>
  <q-page class="">
    <h1>NqFormMixin</h1>
    <p>A mixin with default methods to handle a Form</p>
    <h2>Data</h2>
    <ul>
      <li><code>submitting</code> True if the page is submitting data. This value is set in the default onSubmit() method in the mixin. Need to be set manually if onSumbit() is overwritten</li>
    </ul>
    <h2>Methods</h2>
    <ul>
      <li><code>onSumbit</code> Will take the form data, and send it to the defined ennpoint </li>
      <li><code>submitting</code> Boolean: Default to false, If the data is beign sent, disables the form and shows a loading spinner</li>
    </ul>
    <h1>&lt;nq-form&gt;</h1>
    <p>A component that extends <code>q-form</code></p>
    <h2>Features</h2>
    <ul>
      <li>Validation</li>
      <li>Can be used with a vue template that extends the <code>form</code> mixin</li>
      <li>Automatically set a .row class and .q-col-gutter-md so fields may add its own col-X class</li>
      <li>Adds a default submit and cancel button (customizable labels)</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>ready</code> Boolean: Default to true, If the form is or not ready to receive input. Usefult if need to load something before showing the form. Will hide the from if true and show a skleton.</li>
      <li><code>submitting</code> Boolean: Default to false, If the data is being sent, disables the form and shows a loading spinner in the submit button. Can be tied to the submitting property of the page containing the form</li>
      <li><code>submit-label</code> The label to use in the submit button</li>
      <li><code>cancel-label</code> The label to use in the cancel button, if set to '' the button will not show</li>
    </ul>
    <h2>Events</h2>
    <ul>
      <li><code>@submit</code> Triggered when the form is submited, need to be listened in a page method, for example onSubmit method in the mixin.</li>
      <li><code>@cancel</code> Triggered when the form is canceled, need to be listened in a page method to know what to do</li>
    </ul>
    <hr><br>
    <nq-form
      @submit="onSubmit"
      @cancel="onCancel"
      submit-label="save"
      cancel-label="back"
      :ready="!loading"
      :submitting="submitting"
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
import { NqFormMixin } from '../mixins/NqFormMixin'
export default {
  name: 'Currency',
  mixins: [ NqFormMixin ],
  data () {
    return {
      form: {
        name: null,
        age: null,
        accept: false
      },
      loading: true
    }
  },
  mounted() {
    this.loadEndpoints()
  },
  methods: {
    onSubmitOk () {

    },
    onCancel () {
      console.log('onCancel')
    }
  }
}
</script>
