// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import {StyledChart} from './components/chart';
import {RecoilRoot, useRecoilState} from "recoil";
import {themeState} from "./atoms/themeState";
import {createTheme} from "@mui/material/styles";
import {useMemo} from "react";

// routes
import Router from './routes';
// ----------------------------------------------------------------------

export default function App() {
    const [mode, setMode] = useRecoilState(themeState);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (

        <ThemeProvider theme={theme}>
            <ScrollToTop/>
            <StyledChart/>
            <Router/>
        </ThemeProvider>
    );
}
