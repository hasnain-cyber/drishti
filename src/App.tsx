import {Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import {createTheme, ThemeProvider} from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: '#c74c4b',
            dark: '#772120',
            light: '#ffdddc',
        },
        secondary: {
            main: '#1c80da',
            dark: '#1d4969',
            light: '#c9e8ff'
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
