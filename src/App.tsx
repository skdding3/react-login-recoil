import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyPage from "./components/Mypage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
