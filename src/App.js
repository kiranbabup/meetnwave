import Router from "./Router";
import ThemeProvider from "./theme";
import SnackBar from "./components/shortComponents/SnackBar";
import { AlertProvider } from "./components/shortComponents/AlertProvider";
function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <SnackBar />
        <Router />
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
