<template>
  <nq-page title="&lt;nq-date-time&gt;">
    <template slot="aside">
      <fields-menu />
    </template>
    <h2>Features</h2>
    <ul>
      <li>Shows a formatted date different from the model format</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>symbol</code> $ by default</li>
      <li><code>currency</code> Appends a currency for example USD</li>
    </ul>
    <h3>Model 1: <code>{{ theModel1 }}</code></h3>
    <nq-form no-actions>
      <nq-date-time label="Model 1 with default model and display formats" v-model="theModel1" class="col-12" />
      <nq-date-time label="Model 1 with display-format set" v-model="theModel1" displayFormat="YYYY/MM/DD" class="col-12" />
      <nq-date-time label="Model 1 with display-format set" v-model="theModel1" displayFormat="dddd, MMMM Do YYYY, h:mm:ss a" class="col-12" />
    </nq-form>
    <h3>Model 2: <code>{{ theModel2 }}</code></h3>
    <nq-form no-actions>
      <nq-date-time label="Model 2 with display-format and model-format set" v-model="theModel2" modelFormat="2020-03-03 HH:mm" displayFormat="2020/03/03 HH:mm" class="col-12" />
      <nq-date-time label="Model 2 with display-format set" v-model="theModel2" modelFormat="2020-03-03 HH:mm" displayFormat="dddd, MMMM Do YYYY HH:mm a" class="col-12" />
      <nq-date-time label="Model 2 with no-time set" v-model="theModel2" modelFormat="2020-03-03" displayFormat="2020/03/03" no-time class="col-12" />
    </nq-form>
    <h3>Sample code</h3>
    <vue-code-highlight>

    &#x3C;h3&#x3E;Model 1: &#x3C;code&#x3E;{{ theModel1 }}&#x3C;/code&#x3E;&#x3C;/h3&#x3E;
    &#x3C;nq-date-time label=&#x22;Model 1 with default model and display formats&#x22; v-model=&#x22;theModel1&#x22; class=&#x22;col-12&#x22; /&#x3E;
    &#x3C;nq-date-time label=&#x22;Model 1 with display-format set&#x22; v-model=&#x22;theModel1&#x22; displayFormat=&#x22;YYYY/MM/DD&#x22; class=&#x22;col-12&#x22; /&#x3E;
    &#x3C;nq-date-time label=&#x22;Model 1 with display-format set&#x22; v-model=&#x22;theModel1&#x22; displayFormat=&#x22;dddd, MMMM Do YYYY, h:mm:ss a&#x22; class=&#x22;col-12&#x22; /&#x3E;

    &#x3C;h3&#x3E;Model 2: &#x3C;code&#x3E;{{ theModel2 }}&#x3C;/code&#x3E;&#x3C;/h3&#x3E;
    &#x3C;nq-date-time label=&#x22;Model 2 with display-format and model-format set&#x22; v-model=&#x22;theModel2&#x22; modelFormat=&#x22;2020-03-03 HH:mm&#x22; displayFormat=&#x22;2020/03/03 HH:mm&#x22; class=&#x22;col-12&#x22; /&#x3E;
    &#x3C;nq-date-time label=&#x22;Model 2 with display-format set&#x22; v-model=&#x22;theModel2&#x22; modelFormat=&#x22;2020-03-03 HH:mm&#x22; displayFormat=&#x22;dddd, MMMM Do YYYY HH:mm a&#x22; class=&#x22;col-12&#x22; /&#x3E;
    &#x3C;nq-date-time label=&#x22;Model 2 with no-time set&#x22; v-model=&#x22;theModel2&#x22; modelFormat=&#x22;2020-03-03&#x22; displayFormat=&#x22;2020/03/03&#x22; no-time class=&#x22;col-12&#x22; /&#x3E;

    </vue-code-highlight>
  </nq-page>
</template>

<script>
import FieldsMenu from '../components/FieldsMenu'
export default {
  name: 'DateTime',
  components: { FieldsMenu },
  data () {
    return {
      theModel1: '2020-03-03T14:25:13-06:00',
      theModel2: '2020-03-03 15:30'
    }
  }
}
</script>
