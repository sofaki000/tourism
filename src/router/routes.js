

const routes = [
  {
    linkActiveClass:'active',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'),alias:"/Home" },
      { path: '/Contact', component: () => import('pages/ContactUs.vue') },
      { path: '/Index', component: () => import('pages/Index.vue'),alias:"/Home" },
       { path: '/Blog', 
       component: () => import('pages/Blog.vue'),   
       },
        { path: '/Services', component: () => import('pages/Services.vue') },
        {path: 'Blog/:BlogTitle', component: () => import('pages/BlogPost.vue') ,props:true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
