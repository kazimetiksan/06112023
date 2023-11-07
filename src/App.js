import Home from "./Home";
import Detail from "./Detail";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:_id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
