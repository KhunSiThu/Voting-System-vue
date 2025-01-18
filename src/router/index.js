import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Candidates from '../views/Candidates.vue'
import Vote from '@/views/Vote.vue'
import Results from '@/views/Results.vue'
import Policy from '@/views/Policy.vue'
import Contact from '@/views/Contact.vue'
import Verify from '@/views/Verify.vue'
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
    path: '/student-form',
    name: 'StudentForm',
    component: StudentForm
  },
  {
    path: '/select-major',
    name: 'SelectMajor',
    component: SelectMajor
  },
  {
    path: '/select-year',
    name: 'SelectYear',
    component: SelectYear
  },
  {
    path: '/teacher-form',
    name: 'TeacherForm',
    component: TeacherForm
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  },
  {
    path: '/vote',
    name: 'Vote',
    component: Vote
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/profile-form',
    name: 'ProfileForm',
    component: ProfileForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
