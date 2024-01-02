import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Define your custom colors
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#dc3545',
    },
  },
});

function AppColor() {
  return (
    // Wrap your app in the ThemeProvider component and pass the theme object as a prop
    <ThemeProvider theme={theme}>
      <div>My app</div>
    </ThemeProvider>
  );
}

export default AppColor;
