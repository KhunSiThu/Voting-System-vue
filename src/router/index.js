


import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Candidates from '../views/Candidates.vue'
import Vote from '@/views/Vote.vue'
import Results from '@/views/Results.vue'
import Policy from '@/views/Policy.vue'
import Contact from '@/views/Contact.vue'

import ProfileForm from '@/views/ProfileForm.vue'
import StudentForm from '@/views/StudentForm.vue'
import TeacherForm from '@/views/TeacherForm.vue'
import Role from '@/views/Role.vue'
import SelectMajor from '@/views/SelectMajor.vue'
import SelectYear from '@/views/SelectYear.vue'

const routes = [
  {
    path: '/',
    name: 'Role',
    component: Role
  },
  {
    path: '/StudentForm',
    name: 'StudentForm',
    component: StudentForm
  },
  {
    path: '/SelectMajor',
    name: 'SelectMajor',
    component: SelectMajor
  },
  {
    path: '/SelectYear',
    name: 'SelectYear',
    component: SelectYear
  },
  {
    path: '/TeacherForm',
    name: 'TeacherForm',
    component: TeacherForm
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
    path: '/ProfileForm',
    name: 'ProfileForm',
    component: ProfileForm
  },


]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router