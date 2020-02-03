
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/Index.vue') },
      { name: 'currency', path: 'currency', component: () => import('pages/Currency.vue') }
    ]
  }
]

export default routes
