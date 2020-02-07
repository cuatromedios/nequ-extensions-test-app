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
        :rules="[
          val => $rules.required(val) || 'Your name is required',
          val => $rules.alpha(val) || 'Your name should not have numbers',
          val => $rules.minLength(3)(val) || 'Your name should have at least 3 letters',
          val => $rules.maxLength(10)(val) || 'Your name should not be larger than 10 letters'
        ]"
      />
      <nq-input
        class="col-12"
        v-model="form.email"
        type="email"
        label="Your email *"
        :rules="[
          val => $rules.required(val) || 'An email is required',
          val => $rules.email(val) || 'Please enter a valid email address'
        ]"
      />
      <nq-input-number
        class="col-4"
        v-model="form.age"
        label="Your age *"
        :rules="[
          val => $rules.required(val) || 'Your age is required',
          val => $rules.between(10,100)(val) || 'Please enter your real age'
        ]"
      />
      <nq-input-number
        class="col-4"
        v-model="form.age"
        label="Your age *"
        :rules="[
          val => $rules.or($rules.between(10,15), $rules.between(20,25))(val) || 'Your age has to be between 10 and 15 or 20 and 25',
        ]"
      />
      <nq-field
        :value="form.accept"
        label="Please read the license"
        stack-label
        :rules="[
          val => $rules.isTrue(val) || 'Please set value to maximum 60'
        ]"
      >
        <q-toggle v-model="form.accept" label="I accept the license and terms" />
      </nq-field>
    </nq-form>

  </q-page>
</template>

<script>
import { NqFormMixin } from '../mixins/NqFormMixin'
import validators from 'vuelidate/lib/validators'
export default {
  name: 'Currency',
  mixins: [ NqFormMixin ],
  data () {
    return {
      form: {
        name: null,
        email: null,
        age: 4,
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
