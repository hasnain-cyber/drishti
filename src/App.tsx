import {Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Navbar from "./components/Navbar";

let theme = createTheme({
    palette: {
        primary: {
            main: "#c74c4b",
            dark: "#772120",
            // light: '#ffdddc',
            light: "#ffffff",
        },
        secondary: {
            main: "#1c80da",
            //   dark: "#1d4969",
            dark: "#03214E",
            //   light: "#c9e8ff",
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
            </Switch>
        </ThemeProvider>
    );
}

export default App;
