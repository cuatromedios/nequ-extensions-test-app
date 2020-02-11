<template>
  <q-page>
    <h1>&lt;nq-table&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Stylized by default</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li>Inherits any quasar &lt;q-table&gt; attributes and slots</li>
    </ul>
    <nq-table
      tile="The table"
      :columns="columns"
      :data="theData"
      :actions="actions"
      row-key="id">
      <template v-slot:body-cell-calc="props">
        <q-td :props="props">
          {{ props.row.sales }} x 2 = <q-badge color="purple" :label="props.row.sales * 2" />
        </q-td>
      </template>
    </nq-table>
    <h3>Columns:</h3>
    <pre>{{ columns }}</pre>
    <h3>Actions:</h3>
    <p>An array with <code>icon</code>, <code>tooltip</code> and <code>method</code> properties. Method is a method in the page that receives the row as parameter, for example <code>this.editBook</code>. If no <code>label</code> is set then the button will be rounded</p>
    <pre>{{ actions }}</pre>
    <h3>Data:</h3>
    <pre>{{ theData }}</pre>
  </q-page>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      columns: [
        { name: 'month', label: 'Month', field: 'month', align: 'left' },
        { name: 'sales', label: 'Sales', field: 'sales' },
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
        { icon: 'edit', method: this.edit, tooltip: 'Edit', label: 'Details' },
        { icon: 'delete', color: 'negative', method: this.edit, tooltip: 'Delete' }
      ]
    }
  },
  methods: {
    edit (item) {
      console.log('Edit', item)
    }
  }
}
</script>
