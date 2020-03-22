<template>
  <nq-page max-width="md" title="Nequ Forms">
    A mixin and a component to easy setup input forms
    <h2>&lt;nq-form&gt;</h2>
    <p>A component that extends <code>q-form</code></p>
    <h3>Features</h3>
    <ul>
      <li>Validation</li>
      <li>Can be used with a vue template that extends the <code>form</code> mixin</li>
      <li>Automatically set a .row class and .q-col-gutter-md so fields may add its own col-X class</li>
      <li>Adds a default submit and cancel button (customizable labels)</li>
    </ul>
    <h3>Attributes</h3>
    <ul>
      <li><code>ready</code> Boolean: Default to true, If the form is or not ready to receive input. Usefult if need to load something before showing the form. Set it to false to hide the from and show a skleton.</li>
      <li><code>submitting</code> Boolean: Default to false, If the data is being sent, set this to treu to disable the form and show a loading spinner in the submit button.</li>
      <li><code>submit-label</code> The label to use in the submit button</li>
      <li><code>cancel-label</code> The label to use in the cancel button, if set to '' the button will not show</li>
      <li><code>no-actions</code> Boolean. Do not show action buttons (submit and cancel)</li>
    </ul>
    <h3>Events</h3>
    <ul>
      <li><code>@submit</code> Triggered when the form is submited.</li>
      <li><code>@cancel</code> Triggered when the form is canceled</li>
    </ul>
    <h3>Example</h3>
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
          $rules.required('Please enter your name'),
          $rules.alpha('Your name should not have numbers or special characters'),
          $rules.minLength(3,'Your name should have at least 3 letters'),
          $rules.maxLength(10, 'Your name should not be larger than 10 letters')
        ]"
      />
      <nq-input
        class="col-6"
        v-model="form.email"
        label="Your email *"
        :rules="[
        $rules.required('Please enter an email'),
          $rules.email('Please enter a valid email')
        ]"
      />
      <nq-input
        class="col-6"
        v-model="confirm"
        label="Confirm email *"
        :rules="[
          $rules.is(form.email, 'Please enter the same email')
        ]"
      />
      <nq-input-number
        class="col-4"
        v-model="form.age"
        label="Your age *"
        :rules="[
         $rules.between(0,100, 'Es un número entre 1 y 100')
        ]"
      />
      <nq-select
        v-model="form.gender"
        label="Gender"
        class="col-4"
        :options="[ { label: 'Male', value: 'm' }, { label: 'Female', value: 'f' }, { label: 'Other', value: 'o' }   ]"
        :rules="[
          $rules.required('Please select one'),
        ]"
      />
      <nq-field
        :value="form.accept"
        label="Please read the license"
        class="col-4" dense
        stack-label
        :rules="[
           $rules.is(true, 'Please accept the license')
        ]"
      >
        <q-toggle v-model="form.accept" label="I accept" />
      </nq-field>
    </nq-form>
    <h3>Code</h3>
<vue-code-highlight>
&#x3C;template&#x3E;
  &#x3C;nq-page max-width=&#x22;md&#x22; title=&#x22;Nequ Forms&#x22;&#x3E;
    &#x3C;nq-form
      @submit=&#x22;onSubmit&#x22;
      @cancel=&#x22;onCancel&#x22;
      submit-label=&#x22;save&#x22;
      cancel-label=&#x22;back&#x22;
      :ready=&#x22;!loading&#x22;
      :submitting=&#x22;submitting&#x22;
    &#x3E;
      &#x3C;nq-input
        class=&#x22;col-12&#x22;
        v-model=&#x22;form.name&#x22;
        label=&#x22;Your name *&#x22;
        hint=&#x22;Name and surname&#x22;
        :rules=&#x22;[
          $rules.required(&#x27;Please enter your name&#x27;),
          $rules.alpha(&#x27;Your name should not have numbers or special characters&#x27;),
          $rules.minLength(3,&#x27;Your name should have at least 3 letters&#x27;),
          $rules.maxLength(10, &#x27;Your name should not be larger than 10 letters&#x27;)
        ]&#x22;
      /&#x3E;
      &#x3C;nq-input
        class=&#x22;col-6&#x22;
        v-model=&#x22;form.email&#x22;
        label=&#x22;Your email *&#x22;
        :rules=&#x22;[
        $rules.required(&#x27;Please enter an email&#x27;),
          $rules.email(&#x27;Please enter a valid email&#x27;)
        ]&#x22;
      /&#x3E;
      &#x3C;nq-input
        class=&#x22;col-6&#x22;
        v-model=&#x22;confirm&#x22;
        label=&#x22;Confirm email *&#x22;
        :rules=&#x22;[
          $rules.is(form.email, &#x27;Please enter the same email&#x27;)
        ]&#x22;
      /&#x3E;
      &#x3C;nq-input-number
        class=&#x22;col-4&#x22;
        v-model=&#x22;form.age&#x22;
        label=&#x22;Your age *&#x22;
        :rules=&#x22;[
         $rules.between(0,100, &#x27;Es un n&#xFA;mero entre 1 y 100&#x27;)
        ]&#x22;
      /&#x3E;
      &#x3C;nq-select
        v-model=&#x22;form.gender&#x22;
        label=&#x22;Gender&#x22;
        class=&#x22;col-4&#x22;
        :options=&#x22;[ { label: &#x27;Male&#x27;, value: &#x27;m&#x27; }, { label: &#x27;Female&#x27;, value: &#x27;f&#x27; }, { label: &#x27;Other&#x27;, value: &#x27;o&#x27; }   ]&#x22;
        :rules=&#x22;[
          $rules.required(&#x27;Please select one&#x27;),
        ]&#x22;
      /&#x3E;
      &#x3C;nq-field
        :value=&#x22;form.accept&#x22;
        label=&#x22;Please read the license&#x22;
        class=&#x22;col-4&#x22; dense
        stack-label
        :rules=&#x22;[
           $rules.is(true, &#x27;Please accept the license&#x27;)
        ]&#x22;
      &#x3E;
        &#x3C;q-toggle v-model=&#x22;form.accept&#x22; label=&#x22;I accept&#x22; /&#x3E;
      &#x3C;/nq-field&#x3E;
    &#x3C;/nq-form&#x3E;

  &#x3C;/nq-page&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
export default {
  name: &#x27;Form&#x27;,
  data () {
    return {
      form: {
        name: null,
        email: null,
        age: 4,
        gender: null,
        accept: false
      },
      confirm: &#x27;&#x27;,
      loading: true,
      submitting: false
    }
  },
  mounted() {
    //Simulate is loading something
    setTimeout(() =&#x3E; this.loading = false, 1500)
  },
  methods: {
    onSubmit () {
      //Simulate is submitting something
      this.submitting = true
      setTimeout(() =&#x3E; {
        this.submitting = false
        this.$q.notify({ message: &#x27;Sent&#x27;, color: &#x27;positive&#x27; })
      },
      2000
      )
    },
    onCancel () {
      this.$q.notify({ message: &#x27;Canceled&#x27;, color: &#x27;negative&#x27; })
    }
  }
}
&#x3C;/script&#x3E;
</vue-code-highlight>
  </nq-page>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
export default {
  name: 'Form',
  components:{
    VueCodeHighlight
  },
  data () {
    return {
      form: {
        name: null,
        email: null,
        age: 4,
        gender: null,
        accept: false
      },
      confirm: '',
      loading: true,
      submitting: false
    }
  },
  mounted() {
    //Simulate is loading something
    setTimeout(() => this.loading = false, 1500)
  },
  methods: {
    onSubmit () {
      //Simulate is submitting something
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
        this.$q.notify({ message: 'Sent', color: 'positive' })
      },
      2000
      )
    },
    onCancel () {
      this.$q.notify({ message: 'Canceled', color: 'negative' })
    }
  }
}
</script>
