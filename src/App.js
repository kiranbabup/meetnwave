import Router from "./Router";
import ThemeProvider from "./theme";
import SnackBar from "./components/shortComponents/SnackBar";
function App() {
  return (
    <ThemeProvider>
      <SnackBar/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
