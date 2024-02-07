import { makeStyles, createTheme } from "@rneui/themed";

export const useStyles = makeStyles((props) => ({
  defaultPadding: {
    padding: 10,
  },
}));

export const AppTheme = createTheme({
  lightColors: {
    primary: "#f97171",
    // light coral: #f99192
    // oceanic teal: #66beb2
    // cool mint: #8ad6cc
    // bright mint: #b2eee6
  },
  darkColors: {
    primary: "blue",
  },
  components: {
    Button: {
      raised: false,
      size: "lg",
      radius: 8,
    },
    SpeedDial: {
      color: "blue",
    },
  },
});
