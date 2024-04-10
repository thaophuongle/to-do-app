import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
  BrowserRouter
} from "react-router-dom";
import Home from "./pages/Home";
import HomeTemplate from "./templates/HomeTemplate";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
