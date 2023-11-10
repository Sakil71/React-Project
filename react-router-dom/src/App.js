import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Users from './components/Users/Users';
import UserDetails from './components/Users/User/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetals from './components/Posts/Post/PostDetails/PostDetals';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'blog', element: <Blog></Blog> },
        { path: 'contact', element: <Contact></Contact> },
        {
          path: 'users',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>
        },
        {
          path: 'user/:userId',
          loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),        
          element: <UserDetails></UserDetails>
        },
        {
          path: 'posts',
          loader: async ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Posts></Posts>
        },
        {
          path: 'post/:postId',
          loader: async({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          element: <PostDetals></PostDetals>
        }
      ]
    },

    { path: '*', element: <ErrorPage></ErrorPage> }
  ])

  return (
    <div className="App relative">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
