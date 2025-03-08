import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Feed from "./pages/Feed";
import Results from "./pages/Results";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<Detail />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
