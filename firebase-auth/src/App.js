import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';
import { createContext, useState } from 'react';

export const UserContext = createContext('user');

function App() {
  const [user, setUser] = useState({});
  const [mood, setMood] = useState(false);

  const userValue = {user, setUser, mood, setMood}
  return (
    <UserContext.Provider value={userValue}>
      <div className={`App ${mood ? 'bg-slate-800 text-white min-h-screen' : ''}`}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
