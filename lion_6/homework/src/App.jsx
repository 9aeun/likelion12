import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home'
import IntroPage from './pages/Intro'
import RootLayout from './component/RootLayout';
import IntroLayout from './component/IntroLayout';
import WorkPage from './pages/Work';
import ReactPage from './pages/React';
import IntroDetailPage from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
      {
          path: 'work',
          element: <WorkPage />,
      },
      {
        path: 'react',
        element: <ReactPage />,
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
