import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { router } from './routes/router/router';


function App() {
  return (
    <div className={`App bg-cover bg-center min-h-screen bg-no-repeat text-white font-mono`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
