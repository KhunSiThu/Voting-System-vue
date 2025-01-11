import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Candidates from '../views/Candidates.vue'
import Vote from '@/views/Vote.vue'
import Results from '@/views/Results.vue'
import Policy from '@/views/Policy.vue'
import Contact from '@/views/Contact.vue'
import Form from '@/views/Form.vue'
import Verify from '@/views/Verify.vue'
import ProfileForm from '@/views/ProfileForm.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Candidates',
    name: 'Candidates',
    component: Candidates
  },
  {
    path: '/Vote',
    name: 'Vote',
    component: Vote
  },
  {
    path: '/Results',
    name: 'Results',
    component: Results
  },
  {
    path: '/Policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/ProfileForm',
    name: 'ProfileForm',
    component: ProfileForm
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
