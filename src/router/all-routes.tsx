import AboutUs from '@/pages/about-us'
import Courses from '@/pages/courses'
import Home from '@/pages/home'
import { OurStudents } from '@/pages/our-students'
import { SignIn } from '@/pages/sign-in'
import { Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route element={<Home/>} path='/' ></Route>
        <Route element={<Courses/>} path='/courses' ></Route>
        <Route element={<AboutUs/>} path='/about-us' ></Route>
        <Route element={<SignIn/>} path='/sign-in' ></Route>
        <Route element={<OurStudents/>} path='/our-students' ></Route>
    </Routes>
  )
}
