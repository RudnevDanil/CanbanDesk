import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Schedule} from "./pages/Home/Schedule/Schedule";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import {Home} from "./pages/Home/Home";

export default function App() {
  return (
      <BrowserRouter>
        <div className="App">

            <Routes>

                <Route path="*" element={<Home/>}>
                    <Route path="schedule" element={<Schedule/>}/>

                    <Route path="*" element={<PageNotFound/>}/>
                </Route>

            </Routes>
        </div>
      </BrowserRouter>
  );
}
