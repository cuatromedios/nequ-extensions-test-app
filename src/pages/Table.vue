<template>
  <nq-page title="&lt;nq-table&gt;">
    <h2>Features</h2>
    <ul>
      <li>Stylized by default</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any <a href="https://quasar.dev/vue-components/table" target="_blank">quasar &lt;q-table&gt;</a> attributes and slots</li>
      <li><code>actions</code> An array of objects with <code>icon</code>, <code>tooltip</code> and <code>method</code> properties. Adds an extra column with buttons that can be shown on rollover
        <ul>
          <li><code>method</code> is a method in the page that receives the row as parameter</li>
          <li><code>icon</code> is the icon to show in the button</li>
          <li><code>tootltip</code> is the tootltip to show on rollover</li>
          <li><code>label</code> of the button. If no set, then the button will be rounded</li>
          <li><code>flat</code> shows the button as flat button</li>
        </ul>
      </li>
    </ul>
    <nq-table
      tile="The table"
      :columns="columns"
      :data="theData"
      :actions="actions"
      row-key="id"
      :grid="$q.screen.xs"
      >
      <template v-slot:body-cell-calc="props">
        <q-td :props="props">
          {{ props.row.sales }} x 2 = <q-badge color="purple" :label="props.row.sales * 2" />
        </q-td>
      </template>
      <template v-slot:body-cell-month="props">
        <q-td :props="props">
          <strong><router-link to="#">{{ props.row.month }}</router-link></strong>
        </q-td>
      </template>
    </nq-table>
    <h3>Sample code</h3>
    <vue-code-highlight>
&#x3C;template&#x3E;
  &#x3C;nq-page title=&#x22;&#x26;lt;nq-table&#x26;gt;&#x22;&#x3E;
    &#x3C;nq-table
      tile=&#x22;The table&#x22;
      :columns=&#x22;columns&#x22;
      :data=&#x22;theData&#x22;
      :actions=&#x22;actions&#x22;
      row-key=&#x22;id&#x22;
      :grid=&#x22;$q.screen.xs&#x22;
      &#x3E;
      &#x3C;template v-slot:body-cell-calc=&#x22;props&#x22;&#x3E;
        &#x3C;q-td :props=&#x22;props&#x22;&#x3E;
          { { props.row.sales } } x 2 = &#x3C;q-badge color=&#x22;purple&#x22; :label=&#x22;props.row.sales * 2&#x22; /&#x3E;
        &#x3C;/q-td&#x3E;
      &#x3C;/template&#x3E;
      &#x3C;template v-slot:body-cell-month=&#x22;props&#x22;&#x3E;
        &#x3C;q-td :props=&#x22;props&#x22;&#x3E;
          &#x3C;strong&#x3E;&#x3C;router-link to=&#x22;#&#x22;&#x3E;{ { props.row.month } }&#x3C;/router-link&#x3E;&#x3C;/strong&#x3E;
        &#x3C;/q-td&#x3E;
      &#x3C;/template&#x3E;
    &#x3C;/nq-table&#x3E;
  &#x3C;/nq-page&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
export default {
  name: &#x27;Table&#x27;,
  data () {
    return {
      columns: [
        { name: &#x27;month&#x27;, label: &#x27;Month&#x27;, field: &#x27;month&#x27;, align: &#x27;left&#x27; },
        { name: &#x27;sales&#x27;, label: &#x27;Sales&#x27;, field: &#x27;sales&#x27;, align: &#x27;right&#x27; },
        { name: &#x27;calc&#x27;, label: &#x27;Calculation&#x27; }
      ],
      theData: [
        { id:&#x27;m0&#x27;, month:&#x27;January&#x27;, sales: 2},
        { id:&#x27;m1&#x27;, month:&#x27;February&#x27;, sales: 4},
        { id:&#x27;m2&#x27;, month:&#x27;March&#x27;, sales: 6},
        { id:&#x27;m3&#x27;, month:&#x27;April&#x27;, sales: 3},
        { id:&#x27;m4&#x27;, month:&#x27;May&#x27;, sales: 9},
        { id:&#x27;m5&#x27;, month:&#x27;June&#x27;, sales: 1},
        { id:&#x27;m6&#x27;, month:&#x27;July&#x27;, sales: 5},
      ],
      actions: [
        { icon: &#x27;info&#x27;, method: this.info, tooltip: &#x27;Show more info&#x27;, label: &#x27;More info&#x27;, flat: true },
        { icon: &#x27;edit&#x27;, method: this.edit, tooltip: &#x27;Edit&#x27;, label: &#x27;Details&#x27; },
        { icon: &#x27;delete&#x27;, color: &#x27;negative&#x27;, method: this.edit, tooltip: &#x27;Delete&#x27; }
      ]
    }
  },
  methods: {
    edit (item) {
      this.$q.notify(&#x27;Edit&#x27;)
    },
    info (item) {
      this.$q.notify(&#x27;More info&#x27;)
    }
  }
}
&#x3C;/script&#x3E;

    </vue-code-highlight>
  </nq-page>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      columns: [
        { name: 'month', label: 'Month', field: 'month', align: 'left'},
        { name: 'sales', label: 'Sales', field: 'sales', align: 'right' },
        { name: 'calc', label: 'Calculation' }
      ],
      theData: [
        { id:'m0', month:'January', sales: 2},
        { id:'m1', month:'February', sales: 4},
        { id:'m2', month:'March', sales: 6},
        { id:'m3', month:'April', sales: 3},
        { id:'m4', month:'May', sales: 9},
        { id:'m5', month:'June', sales: 1},
        { id:'m6', month:'July', sales: 5},
      ],
      actions: [
        { icon: 'info', method: this.info, tooltip: 'Show more info', label: 'More info', flat: true },
        { icon: 'edit', method: this.edit, tooltip: 'Edit', label: 'Details' },
        { icon: 'delete', color: 'negative', method: this.edit, tooltip: 'Delete' }
      ]
    }
  },
  methods: {
    edit (item) {
      this.$q.notify('Edit')
    },
    info (item) {
      this.$q.notify('More info')
    }
  }
}
</script>
