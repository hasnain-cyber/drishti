import {Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import GoverningBody from "./pages/Organisation/GoverningBody";
import Navbar from "./components/Navbar/Navbar";
import Board_of_Directors from "./pages/Organisation/BoardOfDirectors";
import Exec_Body from "./pages/Organisation/Exec_Body";
import Implementation_committees from "./pages/Organisation/Implementation_committees";

let theme = createTheme({
    palette: {
        primary: {
            main: "#c74c4b",
            dark: "#772120",
            light: "#ffffff",
        },
        secondary: {
            main: "#1c80da",
            dark: "#03214E",
            light: "#dfe0e2",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/gov_body" component={GoverningBody}/>
                <Route exact path="/bod" component={Board_of_Directors}/>
                <Route exact path="/exec_body" component={Exec_Body}/>
                <Route exact path="/implementation_committees" component={Implementation_committees}/>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
