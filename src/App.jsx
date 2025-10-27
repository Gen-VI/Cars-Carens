import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiscountBanner from "./components/DiscountBanner";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = false; // Replace with your auth logic

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
