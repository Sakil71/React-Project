import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import QuizTopic from "../components/QuizTopic/QuizTopic";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: 'quiz/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizTopic></QuizTopic>
            },
            { path: 'blog', element: <Blog></Blog> }
        ]
    }
])