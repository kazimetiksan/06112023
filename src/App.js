import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {
  Provider
} from 'react-redux'

import store from "./redux/store";

import { getProfile } from "./redux/dispatch";

const App = () => {

  const xauth = sessionStorage.getItem('xauth')
  if (xauth !== null) {
    getProfile({
      xauth
    })
  }
  console.log('xauth', xauth)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:_id" element={<Detail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
