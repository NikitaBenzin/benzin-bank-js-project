import { Home } from '@/components/home/home.component'
import { AboutUs } from '@/components/about-us/about-us.component'
import { Auth } from '@/components/auth/auth.component'


export const ROUTES = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  {
    path: '/auth',
    component: Auth
  }
]