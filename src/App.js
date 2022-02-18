import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import AppRouter from './AppRouter';
import { UserContext } from './context/UserContext';

function App() {

  const [userCookie] = useCookies(['user']);

  return (
    <UserContext.Provider value={{ currentUser: userCookie.user ?? null }} >
      <AppRouter />
    </UserContext.Provider>
  )
}

export default App;
