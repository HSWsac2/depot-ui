import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import AppRouter from './AppRouter';
import { UserContext } from './context/UserContext';

function App() {

  const [userCookie] = useCookies(['user']);
  const [currentUser, setCurrentUser] = useState(userCookie.user ?? null)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }} >
      <AppRouter />
    </UserContext.Provider>
  )
}

export default App;
