import { BrowserRouter as router, Routes, Route, BrowserRouter } from "react-router-dom"
import { useDispatch } from "react-redux";

import './App.css';
import Todo from './todos/Todo'
import Login from './auth/Login';
import Signup from './auth/Signup';
import Loader from './components/UIelements/Loader';
import Modal from './components/UIelements/Modal';
import { useCallback, useEffect, useState } from 'react';
import { clear } from './reduxToolkit/TodoSlice';
import { UserContext } from "./context/user-context"
function App() {
  const[isSignup,setIsSignup]=useState(true)
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const dispatch=useDispatch()

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"))
    if (userDetails && userDetails.token) {
      login(userDetails.token, userDetails.userId)
    } else
      localStorage.clear();
  }, [])


  const login = useCallback((token, uid) => {
    setUserId(uid)
    setToken(token)
    localStorage.setItem(
      "userDetails",
      JSON.stringify({
        token,
        userId: uid,
      })
    );
  }, [])

  const logout = useCallback(() => {
    localStorage.clear()
    setToken(null)
    setUserId(null)
    // dispatch(clear())
  }, [])


  let routes;
  if (token)
    routes = <Route path='/' element={<Todo />} />
  else
    routes = <>
      <Route path='/' element={isSignup ?< Signup  setIsSignup={setIsSignup}/>:<Login setIsSignup={setIsSignup}/>} />

      </>
  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn: !!token, token, userId, login, logout }}>
        <BrowserRouter>
          <Routes>
            {routes}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </div>
  );
}

export default App;
