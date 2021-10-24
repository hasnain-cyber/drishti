import {Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Gov_Body from "./pages/Organisation/Gov_Body";

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
            <Switch>

                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/gov_body" component={Gov_Body}/>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
