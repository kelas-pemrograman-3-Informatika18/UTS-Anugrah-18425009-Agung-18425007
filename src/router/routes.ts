import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: '/', name: 'dashboard', component: () => import('pages/dashboard.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: 'dashboard', name: 'dashboard', component: () => import('pages/dashboard.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: 'tiket-pesawat', name: 'tiket-pesawat', component: () => import('pages/tpesawat.vue') },
      { path: 'tiket-bus', name: 'tiket-bus', component: () => import('pages/tbus.vue') },
      { path: 'tiket-travel', name: 'tiket-travel', component: () => import('pages/ttravel.vue') },
      { path: 'tiket-kereta', name: 'tiket-kereta', component: () => import('pages/tkereta.vue') },
      { path: 'pesan-hotel', name: 'pesan-hotel', component: () => import('pages/photel.vue') },
      { path: 'blog-wisata-dalam-negeri', name: 'blog-wisata-dalam-negeri', component: () => import('pages/bwisatadalam.vue') },
      { path: 'Pendaftaran', name: 'pendaftaran', component: () => import('pages/LoginRegis.vue') },
      { path: 'formulir', name: 'formulir', component: () => import('pages/formulir.vue') },
      { path: 'pemesanan', name: 'pemesanan', component: () => import('pages/statuspesanan.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
