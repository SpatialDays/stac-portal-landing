import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;