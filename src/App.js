import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./component/Create";
import Read from "./Read";
import Update from "./Update";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      
   
    <Route path="/" element={<Create />}> </Route>
    <Route path="/read" element={<Read />}> </Route>
    <Route path="/update" element={<Update />}> </Route>
    

    

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
