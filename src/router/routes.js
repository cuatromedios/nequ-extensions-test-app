
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'layout',
    children: [
      { name: 'layout', path: 'layout', component: () => import('pages/Layout.vue') },
      { name: 'page', path: 'page', component: () => import('pages/Page.vue') },
      { name: 'field', path: 'field', component: () => import('pages/Field.vue') },
      { name: 'input', path: 'input', component: () => import('pages/Input.vue') },
      { name: 'number', path: 'number', component: () => import('pages/Number.vue') },
      { name: 'currency', path: 'currency', component: () => import('pages/Currency.vue') },
      { name: 'percentage', path: 'percentage', component: () => import('pages/Percentage.vue') },
      { name: 'select', path: 'select', component: () => import('pages/Select.vue') },
      { name: 'datetime', path: 'datetime', component: () => import('pages/DateTime.vue') },
      { name: 'form', path: 'form', component: () => import('pages/Form.vue') },
      { name: 'table', path: 'table', component: () => import('pages/Table.vue') },
      { name: 'filters', path: 'filters', component: () => import('pages/Filters.vue') }
    ]
  }
]

export default routes
