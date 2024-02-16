import { Stack } from "expo-router";
import { ThemeProvider } from "@rneui/themed";
import { AppTheme } from "./themes";

const Layout = () => {
    return (
        <ThemeProvider theme={AppTheme}>
            <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
    );
};

export default Layout;
