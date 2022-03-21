import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global.styled";
import { Navbar } from "./components";
import Home from "./pages/HomePage/Home";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
