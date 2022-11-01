import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useState} from 'react';
import AppRouter from './Router';
import Chats from './routes/Chats';
import Chatting from './routes/Chatting';
import Find from './routes/Find';
import Friends from './routes/Friends';
import More from './routes/More';
import Profile from './routes/Profile';
import { authService } from './fbase' 



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Friends />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/find' element={<Find />} />
          <Route path='/more' element={<More />} />
          <Route path='/chatting' element={<Chatting />}></Route>
          <Route path='/profile' element={<Profile />}></Route>   
        </Routes>
      </BrowserRouter>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Twitter app</footer>
    </>
  );
}

export default App;