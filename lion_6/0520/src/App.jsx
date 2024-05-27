import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home'
import IntroPage from './pages/Intro'
import ErrorPage from './pages/Error';
import RootLayout from './component/RootLayout';
import IntroLayout from './component/IntroLayout';
import IntroDetailPage from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children : [
      {
        index : true,
        element: <HomePage />,
      },
      {
        path: 'intro',
        element: <IntroLayout />,
        children: [
          {
            index : true,
            element: <IntroPage />,
          },
          {
            path: ':id',
            element: <IntroDetailPage />
          },
        ],
      },    
    ],
  },  
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
