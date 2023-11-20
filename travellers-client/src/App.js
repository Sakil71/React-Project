import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router/router';


function App() {
  return (
    <div className={`App bg-cover bg-center min-h-screen bg-no-repeat text-white font-mono`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
