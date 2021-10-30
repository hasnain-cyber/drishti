import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoverningBody from "./pages/Organisation/GoverningBody";
import Navbar from "./components/Navbar/Navbar";
import BoardOfDirectors from "./pages/Organisation/BoardOfDirectors";
import ExecBody from "./pages/Organisation/Exec_Body";
import ImplementationCommittees from "./pages/Organisation/Implementation_committees";
import MainFooter from "./components/MainFooter/MainFooter";
import Box from "@mui/material/Box";
import React from "react";

let theme = createTheme({
    palette: {
        primary: {
            main: "#B2040F",
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
            <Navbar />

            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/gov_body" component={GoverningBody} />
                <Route exact path="/bod" component={BoardOfDirectors} />
                <Route exact path="/exec_body" component={ExecBody} />
                <Route exact path="/implementation_committees" component={ImplementationCommittees} />
            </Switch>
            {/*box to provide the margin to the top of footer*/}
            <MainFooter />
        </ThemeProvider>
    );
}

export default App;
