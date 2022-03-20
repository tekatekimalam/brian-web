import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./global.styled";
import { Navbar } from "./components";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
        </Router>
    );
}

export default App;
