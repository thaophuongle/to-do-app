import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import HomeTemplate from "./templates/HomeTemplate";

function App() {

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/"  element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  )
}

export default App
