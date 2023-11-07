import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {
  Provider
} from 'react-redux'

import store from "./redux/store";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:_id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
