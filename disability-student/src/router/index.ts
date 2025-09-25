import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../layouts/Dashboard.vue'
import StudentList from '../views/student/studentList.vue'
import StudentForm from '../views/student/StudentForm.vue'
import addnewstudent from '../views/student/addnewstudent.vue'


const routes = [
  { path: '/', redirect: '/dashboard/students' },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'students',
        component: StudentList
      },
      {
        path: 'students/add',
        component: addnewstudent
      },
      {
        path: 'students/form',
        component: StudentForm
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
