import {createBrowserRouter ,RouterProvider } from 'react-router-dom'
import GetPage from './pages/Get'
import Post from './pages/Post'
import RootLayout from './component/RootLayout'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'
import { loader as postViewLoader } from './pages/Get'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'get',
        element: <GetPage/>,
        loader: postViewLoader,
      },
      {
        path: 'post',
        element: <Post />,
      },
    ]
  },
])

export default function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}