import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('../features/home/HomePage'))
const AboutPage = lazy(() => import('../features/about/AboutPage'))
const NotFound = lazy(() => import('../components/pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { RootLayout } = await import('./ui/RootLayout')
      return { Component: RootLayout }
    },
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: '*', Component: NotFound },
    ],
  },
])