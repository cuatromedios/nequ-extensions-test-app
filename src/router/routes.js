
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/Index.vue') },
      { name: 'input', path: 'input', component: () => import('pages/Input.vue') },
      { name: 'number', path: 'number', component: () => import('pages/Number.vue') },
      { name: 'currency', path: 'currency', component: () => import('pages/Currency.vue') },
      { name: 'percentage', path: 'percentage', component: () => import('pages/Percentage.vue') },
      { name: 'select', path: 'select', component: () => import('pages/Select.vue') }
    ]
  }
]

export default routes
