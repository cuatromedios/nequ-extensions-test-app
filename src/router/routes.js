
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/Index.vue') },
      { name: 'input', path: 'input', component: () => import('pages/Input.vue') },
      { name: 'number', path: 'number', component: () => import('pages/Number.vue') },
      { name: 'currency', path: 'currency', component: () => import('pages/Currency.vue') }
    ]
  }
]

export default routes
